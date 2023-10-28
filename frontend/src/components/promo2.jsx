import React from 'react';
import '../css/promo2.css'

function Pagina( { dir, mainText, secText, implementado, irSitio, url } )
{
  return (
  <div className='contenedor-principal-promo2'>
  <img
    className='imagen-contenedor-principal-promo2'
    src={dir}
    alt="Social Media"
  />
  <div className='contenedor-texto-principal-promo2'>
    <p className='texto-principal-promo2'>
      {mainText}
    </p>
    <p className='texto-secundario-promo2'>
      {secText}
    </p>
    <div className='contenedor-tags-texto'>
      <p id='implementado-text' class='tags-texto'>
        { implementado }
      </p>
      <a id='irsitio-text' class='tags-texto' href={irSitio ? url: ''}>
        {irSitio ? '-IR AL SITIO-': ''}
      </a>
      </div>      
    </div>
  </div>
  );
}
  export default Pagina;
