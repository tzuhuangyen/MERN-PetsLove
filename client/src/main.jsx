import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 导入 HashRouter

import App from './App.jsx';
import ShopContextProvider from './assets/pages/Context/ShopContext.jsx';
// import './assets/all.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/MERN-PetsLove'>
    <App />
  </BrowserRouter>
);
