import React from 'react';
import '../css/text-info-button.css'
import '../css/only-text.css'


function OnlyText( { text, specialId } )
{
  return (
    
    <div className='sec-text only-text-container' id={specialId}>
			{text}
    </div>
  )
}
export default OnlyText;