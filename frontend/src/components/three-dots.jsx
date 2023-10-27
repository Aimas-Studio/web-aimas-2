import React from 'react';
import DropDown from './dropdown';
import '../css/three-dots.css'

function ThreeDots( {specialId} )
{
  return (
    
    <div className={`three-dots-container ${specialId}`}>
        <DropDown/>
    </div>

    


    


  )
}

export default ThreeDots;