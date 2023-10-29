import '../css/text-info-button.css';

function TextInfo( {mainText, secText, specialId, linkId } ) {
  return (
    <section className="text-info-container" id={linkId}>
      <div className="text-info-inner-container">
          <p className='main-text' id={specialId}>
            {mainText}
          </p>
          <p className='sec-text' id={specialId}>
            {secText}
          </p>        
      </div>
    </section> 
  );
}

export default TextInfo;
