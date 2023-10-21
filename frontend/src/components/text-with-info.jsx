import '../css/text-info-button.css';

function TextInfo( {mainText, secText } ) {
  return (
    <div className="text-info-container">
        <p className='main-text'>
          {mainText}
        </p>
        <p className='sec-text'>
          {secText}
        </p>        
    </div>   
  );
}

export default TextInfo;
