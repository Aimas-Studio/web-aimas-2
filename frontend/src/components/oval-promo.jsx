import React from 'react';
import '../css/promo.css';


function Oval( {word1, word2} )
{
  return (
    
    <div className='oval-container'>
        <div class="circle">
            <div class="checkmark"></div>
        </div>
        <div className='oval-p'>
            <strong>{word1}</strong>
        </div>
        <div className='oval-p'>
            {word2}
        </div>

        <div className='oval-button'>
            Ver Más
        </div>
        
            
        
    </div>
  )
}

export default Oval;