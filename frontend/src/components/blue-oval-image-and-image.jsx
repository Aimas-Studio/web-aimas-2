
import OvalImage from '../components/oval-image';
import BlueOvalImage from '../components/blue-oval-image';
import '../css/blue-oval-image-and-image.css';

//Ovalo azul con background y foto a su derecha.
function BlueOvalImageAndImage( {word1, word2, background, image} ) {
  return (
        <div className='container-blue-oval-and-image'>
            <BlueOvalImage
                word1={word1}
                word2={word2}
                background={background}
            />
            <OvalImage
                image={image}
            />
        </div>    
  );
}

export default BlueOvalImageAndImage;
