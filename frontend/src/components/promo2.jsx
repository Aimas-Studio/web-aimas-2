import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pagina.css'

function Pagina( { dir, mainText, secText, implementado, irSitio, url } )
{
  return (
  <div className='contenedor-principal-promo2'>
    <div className='portada-inner-container'>
      <div className='portada-imagen-container'>
        <img
          className='imagen-contenedor-principal'
          src={dir}
          alt="Social Media"
        />
      </div>
      <div className='contenedor-texto-principal contenedor-texto-principal-promo2'>
        <div className='contenedor-texto-only'>
          <p className='texto-principal'>
            {mainText}
          </p>
          
          <p className='texto-secundario'>
            {secText}
          </p>
        </div>
        <div className='contenedor-tags-texto'>
          
          <p id='implementado-text' class='tags-texto'>
            { implementado }
          </p>
          
          <Link id='irsitio-text' class='tags-texto' to={irSitio ? url: ''}>
            {irSitio ? '-IR AL SITIO-': ''}
          </Link>
          
          </div>      
        </div>
      </div>
  </div>
  );
}
  export default Pagina;
