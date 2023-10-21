import React from 'react';
import '../css/blue-oval-promo.css'
import '../css/blue-oval-image.css'


function BlueOvalImage( {word1, word2, background } )
{
  return (
    
        <div className='blue-oval-container'>
            <div className='blue-oval-text' id='blue-oval-head-text'>
                { word1 }
            </div>
            <div className='blue-oval-text'>
                { word2 }
            </div>
        </div>    
  )
}

export default BlueOvalImage;