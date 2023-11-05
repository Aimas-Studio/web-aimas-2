import { Link } from 'react-router-dom';
import '../css/contratar-info-buttons.css'

function ContratarInfoButtons( {color1, color2, colorT1, colorT2, idLast, servicio} )
{
    const servicioFormat = servicio.replace(/ /g, "%20");

  return (
    
        <div className='cont-info-but-container' id={idLast}>
            <Link to={`https://wa.me/13057090744?text=Hola,%20me%20interesa%20contratar%20sus%20servicios%20de%20${servicioFormat}`} 
                className='contratar-button cont-info-but' 
                style = {{backgroundColor: color1, color: colorT1}}
            >
                CONTRATAR SERVICIO
            </Link>

            <Link to={`https://wa.me/13057090744?text=Hola,%20me%20gustaría%20conocer%20más%20acerca%20de%20sus%20servicios%20de%20${servicioFormat}`} 
                className='solinfo-button cont-info-but' 
                style = {{backgroundColor: color2, color: colorT2}}>
                SOLICITAR INFO
                </Link>
        </div>    
  )
}

export default ContratarInfoButtons;