import SocialMedia from '../components/social-media';
import OvalComponents from '../components/oval-components';
import TextInfo from '../components/text-with-info';
import TextInfoButton from '../components/text-info-button';
import OvalComponentsImage from '../components/oval-components-image';
import ThreeDots from '../components/three-dots';
import '../css/inicio-web.css';
import { useEffect, useState } from 'react';


function InicioWeb() {

  // Detectar si el navegador es Opera
  // const esOpera = (!!window.opr) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Detectar si el modo oscuro está activado
  // const modoOscuroActivado = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Se activa si es modo oscuro de Opera
  // const changeMedia = esOpera && modoOscuroActivado;
  const [link, setLink] = useState("/#quienes-somos-section")

  return (
    <div className="InicioWeb main-page-container">
      <div className="row top-container">
        
        {/*FIRST COLUMN*/}
        <div className="col-md-3 first-column">
        <img
          className='aimas-small-logo-image'
          src={require(`../images/aimas-logo-small.png`)}

          alt='Aimas Small Logo'
          />
        </div>
        <ThreeDots
          specialId='second-column-three-dots'
        />
        
        {/*SECOND COLUMN*/}
        <div className="col-md-6 second-column">
          <div className='big-logo-container'>
                
            <img
            className='aimas-big-logo-image'
            src={require(`../images/aimas-logo-big.png`)}
            alt='Aimas Big Logo'
            />
          </div>          
        </div>

        {/*THIRD COLUMN*/}
        <div className="col-md-3 third-column">
          <div className='third-column-container'>
            <ThreeDots/>      
            <SocialMedia/>
          </div>
        </div>
      </div>

      <OvalComponents linkPage={link}/>
      
      <TextInfoButton
        mainText='Blog del Sitio'
        secText='Contamos con una blog digital en donde te brindamos consejos y recomendaciones para impulsar tu negocio en distintas esferas.'
        buttonText='IR AL BLOG'
        linkPage='/Blog'
      />
     
      <OvalComponentsImage/>

      <TextInfo
        linkId='quienes-somos-section'
        specialId ='special-text-info'
        mainText='¿Quiénes Somos?'
        secText='Somos un Estudio de Diseño especializado en la creación de marcas y sitios webs. Creamos logotipos, manuales de identidad, tarjetas de presentación, folletos, catálogos digitales y cartas menú para restaurantes, tiendas online y más!'
      />

      <TextInfoButton
        mainText='Comunidad'
        secText='Todos los contenidos que publicamos en redes sociales son redireccionados a nuestro grupo oficial de WhatsApp en el que realizamos dinámicas y concursos para la comunidad de emprendedores. '
        buttonText='UNIRME A LA COMUNIDAD'
        linkPage='https://whatsapp.com/channel/0029VaDjllj4o7qTq37d222A'
        specialId='special-text-info'
      />

      <div className='footer-promocional'>
        <img
          className='aimas-small-logo-image'
          src={require(`../images/aimas-logo-small.png`)}
          alt='Aimas Small Logo'
        />
        <SocialMedia/>

      </div>
    </div>   
  );
}

export default InicioWeb;
