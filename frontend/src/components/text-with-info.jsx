import '../css/text-info.css';

function TextInfo( {mainText, secText, buttonText} ) {
  return (
    <div className="TextInfo">
        <p className='main-text'>
          {mainText}
        </p>
        <p className='sec-text'>
          {secText}
        </p>
        <button className='button-text'>
            {buttonText}
        </button>
    </div>   
  );
}

export default TextInfo;
