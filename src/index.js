import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Layout from './pages/Layout'
import Home from './pages/Home'
import MyForms from './pages/MyForms'
import Hooks from './pages/Hooks'
import NoPage from './pages/Nopage'


import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='myforms' element={<MyForms />} />
          <Route path='hooks' element={<Hooks />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);


