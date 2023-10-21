import '../css/text-info.css';

function TextInfo( {mainText, secText, buttonText} ) {
  return (
    <div className="text-info-container">
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
  );
}

export default TextInfo;
