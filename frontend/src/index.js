import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import BlogWeb from './pages/BlogWeb';
import WebGallery from './pages/WebGallery';
import InicioWeb from './pages/InicioWeb';
import WebDesign from './pages/WebDesign';
import WebSites from './pages/WebSites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
    <BlogWeb/>
  // {/* </React.StrictMode> */}
);
