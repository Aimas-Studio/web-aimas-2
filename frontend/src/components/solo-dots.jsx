import React from 'react';
import '../css/solo-dots.css'

function SoloDots()
{
  return (
    
    <div className='solo-dots-container'>
         {/*Three Dots image*/}
        <img 
        className='solo-dots'
        src={require(`../images/three-dots.png`)}
        alt="three dots"
        />
    </div>
  )
}
export default SoloDots;