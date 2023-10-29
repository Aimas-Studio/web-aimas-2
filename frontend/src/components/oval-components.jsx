import '../css/oval-components.css';
import Oval from '../components/oval-promo'
import BlueOval from '../components/blue-oval-promo';
import { Link } from 'react-router-dom';

function OvalComponents() {
  return (
    <div className="OvalComponents">
            
        <div className='oval-components-container'>
          <div className='oval-components-inner-container'>
            <span className='regular-ovals'>
              <Oval
                  word1='Diseño'
                  word2='Gráfico'
                  imageColor='red'
                  linkPage='/Designs'
              />
              <Oval
                  word1='Sitios'
                  word2='Webs'
                  imageColor='blue'
                  linkPage='/WebSites'
              />
            </span>
        <BlueOval
          word1='¿Quiénes somos?'
          word2='Somos un Estudio de Diseño especializado en la creación de marcas y sitios webs.'
          buttonText='VER MÁS'
          linkTo='/TextInfo'
        />
        </div>
      </div>     
    </div>   
  );
}

export default OvalComponents;
