import '../css/text-info-button.css';

function TextInfo( {mainText, secText } ) {
  return (
    <div className="text-info-container">
      <div className="text-info-inner-container">
          <p className='main-text'>
            {mainText}
          </p>
          <p className='sec-text'>
            {secText}
          </p>        
      </div>
    </div> 
  );
}

export default TextInfo;
