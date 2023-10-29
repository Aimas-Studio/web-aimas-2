import React from 'react';
import { Link } from 'react-router-dom';
import '../css/blue-oval-promo.css';

function BlueOval( {word1, word2, buttonText, linkPage } )
{
  return (
    
    <div className='blue-oval-container' id='no-image-blue-oval'>
			<div className='blue-oval-texts-container'> 
        <div className='blue-oval-text' id='blue-oval-head-text'>
            { word1 }
        </div>
        <div className='blue-oval-text'>
            { word2 }
        </div>
			</div>
        <div className='blue-oval-button-container'>
            <Link to={linkPage} className='blue-oval-button'>
                {buttonText}
            </Link>
        </div>
    </div>
  )
}

export default BlueOval;