import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import BlogWeb from './pages/BlogWeb';
import WebsDone from './pages/WebsDone';
import InicioWeb from './pages/InicioWeb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <InicioWeb />
  // </React.StrictMode>
);
