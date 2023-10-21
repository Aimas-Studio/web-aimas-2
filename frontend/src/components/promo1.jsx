import React from 'react';
import '../css/promo1.css'

function Portada( { dir, mainText, secText} )
{
  return (
    <div className='contenedor-principal'>
      <img
        className='imagen-contenedor-principal'
        src={require(`../images/${dir}.png`)}
        alt="Social Media"
      />
      <div className='contenedor-texto-principal'>
        <p className='texto-principal'>
          <strong>{mainText}</strong>
        </p>
        <p className='texto-secundario'>
          {secText}
        </p>
      </div>      
    </div>
  )
}

export default Portada;