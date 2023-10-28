import React from 'react';
import '../css/promo1.css'


function Portada( { dir, mainText, secText} )
{
  return (
    
    <div className='contenedor-principal'>
      <div className='portada-inner-container'>
        <div className='portada-imagen-container'>
          <img
            className='imagen-contenedor-principal'
            src={dir}
            alt="Social Media"
          />
        </div>
        <div className='contenedor-texto-principal'>
          <p className='texto-principal'>
            {mainText}
          </p>
          <p className='texto-secundario'>
            {secText}
          </p>
        </div>
      </div>      
    </div>
  )
}

export default Portada;