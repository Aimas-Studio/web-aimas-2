import React from 'react';
import '../css/promo2.css'

function Pagina( { dir, mainText, secText, implementado, irSitio } )
{
  return (
    <div className='contenedor-principal-promo2'>
      <img
        className='imagen-contenedor-principal-promo2'
        src={require(`../images/${dir}.png`)}
        alt="Social Media"
      />
      <div className='contenedor-texto-principal-promo2'>
        <p className='texto-principal-promo2'>
          <strong>{mainText}</strong>
        </p>
        <p className='texto-secundario-promo2'>
          {secText}
        </p>
        <div className='contenedor-tags-texto'>
          <p id='implementado-text'>
            { implementado }
          </p>
          <p id='irsitio-text'>
            {irSitio}
          </p>
        </div>
      </div>      
    </div>
  )
}

export default Pagina;