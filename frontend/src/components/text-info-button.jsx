import '../css/text-info-button.css';

function TextInfoButton( {mainText, secText, buttonText} ) {
  return (
    <div className="text-info-container">
      <div className="text-info-inner-container">
          <p className='main-text'>
            {mainText}
          </p>
          <p className='sec-text'>
            {secText}
          </p>
          <div className='oval-button-container'>
          <button className='button-text'>
              {buttonText}
          </button>
          </div>        
      </div>
    </div> 
  );
}

export default TextInfoButton;
