import '../css/contratar-info-buttons.css'

function ContratarInfoButtons( {color1, color2, colorT1, colorT2, idLast} )
{
  return (
    
        <div className='cont-info-but-container' id={idLast}>
            <button 
                className='contratar-button cont-info-but' 
                style = {{backgroundColor: color1, color: colorT1}}
            >
                CONTRATAR SERVICIO
            </button>

            <button 
                className='solinfo-button cont-info-but' 
                style = {{backgroundColor: color2, color: colorT2}}>
                SOLICITAR INFO
            </button>
        </div>    
  )
}

export default ContratarInfoButtons;