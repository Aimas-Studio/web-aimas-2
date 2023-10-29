import { Link } from 'react-router-dom';
import '../css/text-info-button.css';

function TextInfoButton( {mainText, secText, buttonText, linkPage, specialId} ) {
  return (
    <div className="text-info-container">
      <div className="text-info-inner-container">
          <p className='main-text' id = {specialId}>
            {mainText}
          </p>
          <p className='sec-text' id = {specialId}>
            {secText}
          </p>
          <div className='oval-button-container' id = {specialId}>
          <Link to={linkPage} className='button-text'>
              {buttonText}
          </Link>
          </div>        
      </div>
    </div> 
  );
}

export default TextInfoButton;
