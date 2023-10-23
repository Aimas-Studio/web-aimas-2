import React, { useState, useEffect } from 'react';
import LogoAndImage from '../components/logo-and-image';
import SocialDotsHeader from '../components/social-dots-header';
import TextInfo from '../components/text-with-info';
import BlueOvalComponentsImage from '../components/blue-oval-components-image';
import ContratarInfoButtons from '../components/contratar-info-buttons';
import BlueOvalImageText from '../components/blue-oval-image-text';
import '../css/web-design.css';


function WebDesign() {
    const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setModoOscuro(mediaQuery.matches);
    const handler = (event) => setModoOscuro(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

    return (
        <div className='WebDesign'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage={modoOscuro ? 'aimas-logo-small-white' : 'aimas-logo-small'}
                promoImage='cchang-promo-image'
            />

            <TextInfo
                mainText='Diseño Gráfico'
                secText='El diseño gráfico es imprescindible para la creación y/o consolidación de su empresa. A continuación les mostramos los servicios que nuestro estudio ofrece para usted en este sector:'
            />

            <BlueOvalComponentsImage
                image1='cchang-promo'
                image2='aimas-studio-promo'
                mainText='Diseño de Marcas'
                secText='Si tiene una idea de negocio nosotros lo ayudamos a materializarla.'
                backImage='pincel-fondo'
            />
            <TextInfo
                mainText=''
                secText='Diseñamos el nombre de su empresa, su identificador visual (Logotipo) y las aplicaciones del mismo pautados en un manual de identidad visual.'
            />
            <TextInfo
                mainText=''
                secText='Este servicio incluye el diseño de todos los soportes necesarios para la marca como sus redes sociales, catálogos o cartas menú, tarjetas de presentación, uniformes y más.'
            />

            <ContratarInfoButtons
                color1='#467BF7'
                color2='#C7D7FD'
                colorT1='#fff'
                colorT2='#003070'
            />

            <BlueOvalComponentsImage
                image1='java-promo'
                image2='cairos-promo'
                mainText='Gestión de Redes'
                secText='La presencia en las redes sociales es vital para el contacto de un negocio con su público meta.'
                backImage='lupa'
            />

            <TextInfo
                mainText=''
                secText='En este servicio le ofrecemos distintos paquetes que incluyen la creación de un plan temático de contenido, el diseño de post y edición de videos y la publicación de los mismos, garantizando siempre un aumento de la cantidad de seguidores.'
            />
            
            <ContratarInfoButtons
                color1='#5846F7'
                color2='#CCC7FD'
                colorT1='#fff'
                colorT2='#1A00FF'
            />

            <BlueOvalImageText
                mainText='Otros Servicios'
                secText='Si usted lo que desea es un servicio independiente como:'
                backImage='varita'
            />
            

        </div>
    )
}
export default WebDesign;