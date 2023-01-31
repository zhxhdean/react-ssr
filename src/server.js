import express from 'express';
import React  from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter} from'react-router-dom/server';
import App from './app';
// 服务端入口文件

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  let content = renderToString(<StaticRouter location={req.path}><App /></StaticRouter>);
  console.log(content)
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


app.listen(3000, () => {
  console.log('app listening on port 3000')
})
