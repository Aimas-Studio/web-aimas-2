import React from 'react';
import '../css/blue-oval-promo.css'

function BlueOval( {word1, word2 } )
{
  return (
    
    <div className='blue-oval-container'>
        <div className='blue-oval-text' id='blue-oval-head-text'>
            { word1 }
        </div>
        <div className='blue-oval-text'>
            { word2 }
        </div>
        <div className='blue-oval-button-container'>
            <button className='blue-oval-button'>
                VER MÁS
            </button>
        </div>
    </div>
  )
}

export default BlueOval;