import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import BlogWeb from './pages/BlogWeb';
import WebGallery from './pages/WebGallery';
<<<<<<< HEAD
import InicioWeb from './pages/InicioWeb';
=======
>>>>>>> acb08859ba320ecc69a8fdd30b02f13e4045d3a0
import WebDesign from './pages/WebDesign';
import WebSites from './pages/WebSites';
import InicioWeb from './pages/InicioWeb';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
    <BlogWeb/>
  // {/* </React.StrictMode> */}
);
