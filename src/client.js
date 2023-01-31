import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import React from 'react';
import {routes} from './app';

let router = createBrowserRouter(routes);
// c端入口文件
// hydrateRoot， 给dom绑定上事件 https://zh-hans.reactjs.org/docs/react-dom-client.html#hydrateroot
hydrateRoot(document.getElementById('root'), <RouterProvider router={router} />);