import './css/webs-done.css';
import SocialMedia from './components/social-media';
import ThreeDots from './components/three-dots';

function WebsDone() {
  return (
    <div className="WebsDone">
      <div className='contenedor-header'>
        <SocialMedia/>
        <ThreeDots/>
      </div>     
    </div>   
  );
}

export default WebsDone;
