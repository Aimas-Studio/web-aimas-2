import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import BlogWeb from './pages/BlogWeb';
import WebGallery from './pages/WebGallery';
import WebDesign from './pages/WebDesign';
import WebSites from './pages/WebSites';
import InicioWeb from './pages/InicioWeb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/'  Component={InicioWeb}/>
      <Route path='/Gallery' Component={WebGallery} />
      <Route path='/Designs' Component={WebDesign}/>
      <Route path='/WebSites' Component={WebSites} />
      <Route path='/Blog' Component={BlogWeb} />
    </Routes>
  </Router>);
