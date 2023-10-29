import { Link } from 'react-router-dom';
import '../css/contratar-info-buttons.css'

function ContratarInfoButtons( {color1, color2, colorT1, colorT2, idLast} )
{
  return (
    
        <div className='cont-info-but-container' id={idLast}>
            <Link to='https://wa.me/5354144705?text=Hola%20mundo' 
                className='contratar-button cont-info-but' 
                style = {{backgroundColor: color1, color: colorT1}}
            >
                CONTRATAR SERVICIO
            </Link>

            <Link to='https://wa.me/5354144705?text=Hola%20Marian' 
                className='solinfo-button cont-info-but' 
                style = {{backgroundColor: color2, color: colorT2}}>
                SOLICITAR INFO
                </Link>
        </div>    
  )
}

export default ContratarInfoButtons;