import OvalImage from '../components/oval-image'
import BlueOval from '../components/blue-oval-promo';
import '../css/oval-components-image.css';

//Ovalo azul con texto y botón acompañado de dos imágenes.
function OvalComponentsImage() {
  return (
    <div className="OvalComponentsImage">
            
        <div className='oval-components-image-container'>
        <span className='oval-images-container'>
          <OvalImage
              image='aimas-studio-promo'
          />
          <OvalImage
              image='cchang-promo'
          />
        </span>
        <BlueOval
          word1='Galería de Proyectos'
          word2='Conoce a nuestros clientes y los proyectos que hemos desarrollado'
          buttonText='IR A LA GALERÍA'
        />
      </div>     
    </div>   
  );
}

export default OvalComponentsImage;
