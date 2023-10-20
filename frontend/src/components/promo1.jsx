import React from 'react';
import '../css/promo.css'


function Portada( {imgLetter, mainText, secText} )
{
  return (
    
    <div className='contenedor-principal'>
      <img
        className='imagen-contenedor-principal'
        src={require(`../images/promo-${imgLetter}.png`)}
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