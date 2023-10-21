import '../css/inicio-web.css';
import SocialMedia from '../components/social-media';
import SoloDots from '../components/solo-dots';
import OvalComponents from '../components/oval-components';
import TextInfo from '../components/text-with-info';


function InicioWeb() {
  return (
    <div className="InicioWeb">
            
      <div class="row top-container">
        
        {/*FIRST COLUMN*/}
        <div class="col-md-3">
        <img
          className='aimas-small-logo-image'
          src={require(`../images/aimas-logo-small.png`)}
          alt='Aimas Small Logo Image'
          />
        </div>

        {/*SECOND COLUMN*/}
        <div class="col-md-6">
          <div className='big-logo-container'>
            <img
            className='aimas-big-logo-image'
            src={require(`../images/aimas-logo-big.png`)}
            alt='Aimas Big Logo Image'
            />
          </div>          
        </div>

        {/*THIRD COLUMN*/}
        <div class="col-md-3 third-column">
          <div className='third-column-container'>
            <SoloDots/>        
            <SocialMedia/>
          </div>
        </div>
      </div>

      <OvalComponents/>
      <TextInfo/>
     
    </div>   
  );
}

export default InicioWeb;
