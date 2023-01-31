import express from 'express';
import {Headers, Request} from 'node-fetch'
import React  from 'react';
import {renderToString} from 'react-dom/server';
import { createStaticRouter, StaticRouterProvider,} from'react-router-dom/server';
  import { createStaticHandler } from "@remix-run/router";
import {routes} from './app';
// 服务端入口文件

const app = express();
app.use(express.static('public'));

app.get('*',async (req, res) => {
  let { query } = createStaticHandler(routes);
  let remixRequest = createFetchRequest(req);
  let context = await query(remixRequest);
  let router = createStaticRouter(routes, context);
  let content = renderToString(<StaticRouterProvider router={router} context={context} nonce="the-nonce"/>);


  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React Router - SSR Example</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script type="module" src="/index.js"></script>
    </body>
  </html>`
  res.send(html);
});

 function createFetchHeaders(
  requestHeaders
) {
  let headers = new Headers();
  for (let [key, values] of Object.entries(requestHeaders)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  return headers;
}

function createFetchRequest(req) {
  let origin = `${req.protocol}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();

  req.on("close", () => {
    controller.abort();
  });

  let init = {
    method: req.method,
    headers: createFetchHeaders(req.headers),
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
