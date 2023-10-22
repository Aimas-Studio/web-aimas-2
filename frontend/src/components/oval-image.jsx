import React from 'react';

function OvalImage( {image} )
{
  return (
    <img 
      className={`oval-image ${image}`}
      src={require(`../images/${image}.png`)}
      alt="Promo"
    />
  )
}
export default OvalImage;