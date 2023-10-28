import React from 'react';
import '../css/text-info-button.css'
import '../css/only-text.css'


function OnlyText( { text } )
{
  return (
    
    <div className='sec-text only-text-container'>
			{text}
    </div>
  )
}
export default OnlyText;