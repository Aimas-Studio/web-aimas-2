import React from 'react';
import { useEffect, useState } from 'react';
import '../css/social-media.css'

function SocialMedia( {isMenuLogos} )
{

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dir = (windowWidth < 501 && isMenuLogos=='true')? 'grey' : 'logo';

  return (
    
    <div className='social-media-container'>
        {/*Instagram Logo*/}
        <img 
        className='insta-logo logos'
        src={require(`../images/insta-${dir}.png`)}
        alt="social media logos"
        />
         {/*Facebook Logo*/}
        <img 
        className='face-logo logos'
        src={require(`../images/face-${dir}.png`)}
        alt="social media logos"
        />
         {/*Whatsapp Logo*/}
        <img 
        className='whats-logo logos'
        src={require(`../images/whats-${dir}.png`)}
        alt="social media logos"
        />
    </div>
  )
}

export default SocialMedia;