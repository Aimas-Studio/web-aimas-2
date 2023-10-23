import '../css/oval-components.css';
import Oval from '../components/oval-promo'
import BlueOval from '../components/blue-oval-promo';

function OvalComponents() {
  return (
    <div className="OvalComponents">
            
        <div className='oval-components-container'>
          <span className='regular-ovals'>
            <Oval
                word1='Diseño'
                word2='Gráfico'
                imageColor='red'
            />
            <Oval
                word1='Sitios'
                word2='Webs'
                imageColor='blue'
            />
          </span>
        <BlueOval
          word1='¿Quiénes somos?'
          word2='Somos un Estudio de Diseño especializado en la creación de marcas y sitios webs.'
          buttonText='VER MÁS'
        />
      </div>     
    </div>   
  );
}

export default OvalComponents;
