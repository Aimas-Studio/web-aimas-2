import React from 'react';
import { Link } from 'react-router-dom';
import '../css/oval-promo.css'

function Oval( {word1, word2, imageColor, linkPage} )
{
  return (
    
    <div className='oval-container'>
        <div className='oval-container-elements'>
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
                <Link to={linkPage} className='oval-button'>VER MÁS</Link>
            </div>
        </div>
    </div>
  )
}

export default Oval;