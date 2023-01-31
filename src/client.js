import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import App from './app';
// c端入口文件
// hydrateRoot， 给dom绑定上事件 https://zh-hans.reactjs.org/docs/react-dom-client.html#hydrateroot
hydrateRoot(document.getElementById('root'), <BrowserRouter><App /></BrowserRouter>);