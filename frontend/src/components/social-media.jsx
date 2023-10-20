import React from 'react';
import '../css/social-media.css'

function SocialMedia()
{
  return (
    
    <div className='social-media-container'>
        {/*Instagram Logo*/}
        <img 
        className='insta-logo logos'
        src={require(`../images/insta-logo.png`)}
        alt="social media logos"
        />
         {/*Facebook Logo*/}
        <img 
        className='face-logo logos'
        src={require(`../images/face-logo.png`)}
        alt="social media logos"
        />
         {/*Whatsapp Logo*/}
        <img 
        className='whats-logo logos'
        src={require(`../images/whats-logo.png`)}
        alt="social media logos"
        />
    </div>
  )
}

export default SocialMedia;