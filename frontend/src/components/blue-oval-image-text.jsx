import BlueOvalImage from '../components/blue-oval-image';
import ContratarInfoButtons from './contratar-info-buttons';
import '../css/blue-oval-image-text.css';

function BlueOvalImageText( {mainText, secText, backImage} ) {
    return (

      <div class="container rows-container">
        <div class="row my-row">
          <div class="col-sm-6 column-first">
            <BlueOvalImage
              word1={mainText}
              word2={secText}
              background = {backImage}
            />
          </div>
          <div class="col-sm-6 column-second">
            <div class="row">
              <div class="col-sm-12 column-sized-12">
              <p className='texto-largo'>
                • Creación de tarjetas de presentación. • Catálogos digitales o cartas menú. • Diseño o rediseño de logotipo. • Cartel publicitario para redes sociales. • Identificador y papelería para evento.
                <br/>
                De igual manera puede contactarnos, será un placer atenderle.
              </p>
              </div>
              <div class="col-sm-12 column-sized-12">
              <ContratarInfoButtons
                color1='#4EB3E7'
                color2='#C9E8F8'
                colorT1='#fff'
                colorT2='#003070'
                idLast='isLast'
                servicio='otros.'
              />
              </div>
            </div>
          </div>
        </div>
      </div>




      
    );
  }
  
  export default BlueOvalImageText;
  