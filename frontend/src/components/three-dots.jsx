import React from 'react';
import '../css/three-dots.css'

function ThreeDots()
{
  return (
    
    <div className='three-dots-container'>
         {/*Three Dots image*/}
        <img 
        className='three-dots'
        src={require(`../images/three-dots.png`)}
        alt="three dots"
        />
    </div>
  )
}

export default ThreeDots;