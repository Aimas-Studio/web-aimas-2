import React from 'react';
import '../css/oval-promo.css'

function Oval( {word1, word2, imageColor} )
{
  return (
    
    <div className='oval-container'>
        <div className="circle">
            <img 
            className='check-image'
            src={require(`../images/${imageColor}-check.png`)}
            alt="Check"
            />
        </div>
        <div className='oval-p' id='oval-p-word1'>
            {word1}
        </div>
        <div className='oval-p'>
            {word2}
        </div>

        <div className='oval-button-container'>
            <button className='oval-button'>
                VER MÁS
            </button>
        </div>
    </div>
  )
}

export default Oval;