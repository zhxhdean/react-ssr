import React from "react";
import Home from "./pages/home";
import About from "./pages/about";

// 路由入口文件


export const routes = [{
  path: '/',
  element: <Home />,
  loader: Home.getServerSideProps,
}, {
  path: '/about',
  element: <About />
}]



