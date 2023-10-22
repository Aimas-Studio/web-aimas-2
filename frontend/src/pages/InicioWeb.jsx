import SocialMedia from '../components/social-media';
import SoloDots from '../components/solo-dots';
import OvalComponents from '../components/oval-components';
import TextInfo from '../components/text-with-info';
import TextInfoButton from '../components/text-info-button';
import OvalComponentsImage from '../components/oval-components-image';
import '../css/inicio-web.css';
import DropDown from '../components/dropdown';



function InicioWeb() {
  return (
    <div className="InicioWeb">
            
      <div class="row top-container">
        
        {/*FIRST COLUMN*/}
        <div class="col-md-3 first-column">
        <img
          className='aimas-small-logo-image'
          src={require(`../images/aimas-logo-small.png`)}
          alt='Aimas Small Logo'
          />
        </div>

        {/*SECOND COLUMN*/}
        <div class="col-md-6">
          <div className='big-logo-container'>
            <img
            className='aimas-big-logo-image'
            src={require(`../images/aimas-logo-big.png`)}
            alt='Aimas Big Logo'
            />
          </div>          
        </div>

        {/*THIRD COLUMN*/}
        <div class="col-md-3 third-column">
          <div className='third-column-container'>
            <DropDown/>       
            <SocialMedia/>
          </div>
        </div>
      </div>

      <OvalComponents/>
      
      <TextInfoButton
        mainText='Blog del Sitio'
        secText='Contamos con una blog digital en donde te brindamos consejos y recomendaciones para impulsar tu negocio en distintas esferas.'
        buttonText='IR AL BLOG'
      />
     
      <OvalComponentsImage/>

      <TextInfo
        mainText='¿Quiénes Somos?'
        secText='Somos un Estudio de Diseño especializado en la creación de marcas y sitios webs. Creamos logotipos, manuales de identidad, tarjetas de presentación, folletos, catálogos digitales y cartas menú para restaurantes, tiendas online y más!'
      />

      <TextInfoButton
        mainText='Comunidad'
        secText='Todos los contenidos que publicamos en redes sociales son redireccionados a nuestro grupo oficial de WhatsApp en el que realizamos dinámicas y concursos para la comunidad de emprendedores. '
        buttonText='UNIRME A LA COMUNIDAD'
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
