import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='https://www.instagram.com/aimas_studio/?img_index=1' className='logos'>
          <img 
            className='insta-logo logo-images'
            src={require(`../images/insta-${dir}.png`)}
            alt="social media logos"
          />
        </Link>
         {/*Facebook Logo*/}
         <Link to='https://www.facebook.com/profile.php?id=100093382833855&mibextid=ZbWKwL' className='logos'>
          <img 
            className='face-logo logo-images'
            src={require(`../images/face-${dir}.png`)}
            alt="social media logos"
          />
        </Link>
         {/*Whatsapp Logo*/}
        <Link to='https://wa.me/13057090744?text=Hola,%20me%20interesa%20conocer%20sobre%20sus%20servicios.%20¿Puede%20darme%20más%20información?' className='logos'>
          <img           
            className='whats-logo logo-images'  
            src={require(`../images/whats-${dir}.png`)}
            alt="social media logos"
          />
        </Link>
    </div>
  )
}

export default SocialMedia;