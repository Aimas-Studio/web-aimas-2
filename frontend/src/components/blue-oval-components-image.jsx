import OvalImage from '../components/oval-image'
import BlueOvalImage from '../components/blue-oval-image';
import '../css/oval-components-image.css';

//Ovalo azul con background y texto acompañado de dos imágenes.
function BlueOvalComponentsImage( {image1, image2, mainText, secText, backImage} ) {
  return (
    <div className="BlueOvalComponentsImage">
            
        <div className='oval-components-image-container'>
          <div className='oval-components-image-inner-container'>
            <span className='oval-images-container'>
              <OvalImage
                  image={image1}
              />
              <OvalImage
                  image={image2}
              />
            </span>
            <BlueOvalImage
              word1={mainText}
              word2={secText}
              background = {backImage}
            />
          </div>
      </div>     
    </div>   
  );
}

export default BlueOvalComponentsImage;
