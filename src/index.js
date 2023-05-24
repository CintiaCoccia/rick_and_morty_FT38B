import React from 'react'
import App from './App'
import { BrowserRouter } from "react-router-dom"; 
import { createRoot } from 'react-dom/client';
import "./index.css";
import store from './redux/store';
//import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  // <Provider>

  <BrowserRouter>
  <App />
  </BrowserRouter>

  // </Provider>

);
