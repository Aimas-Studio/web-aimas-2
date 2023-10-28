import '../css/text-info-button.css';

function TextInfo( {mainText, secText, specialId } ) {
  return (
    <div className="text-info-container">
      <div className="text-info-inner-container">
          <p className='main-text' id={specialId}>
            {mainText}
          </p>
          <p className='sec-text' id={specialId}>
            {secText}
          </p>        
      </div>
    </div> 
  );
}

export default TextInfo;
