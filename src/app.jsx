import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import About from './pages/about';
// 路由入口文件
export default function App() {
  return (<Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}
