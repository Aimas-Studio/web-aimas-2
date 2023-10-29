import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import leftArrow from '../images/arrow-left.png';
import {useState} from 'react';
import '../css/three-dots.css';
import '../css/dropdown.css';
import SocialMedia from './social-media';

function DropDown() {

    const [isActive, setIsActive] = useState(false);
    
    const handleClick = event => {
        // toggle isActive state on click
        setIsActive(current => !current);
    }
    if (isActive) {
      // If the menu is being opened, add the no-scroll class to the body
      document.body.classList.add('no-scroll');
  } else {
      // If the menu is being closed, remove the no-scroll class from the body
      document.body.classList.remove('no-scroll');
  }

  return (
    <div className='dropdown-three-dots-container'>
        <Dropdown as={ButtonGroup}>
            
            {/*TOGGLE*/}
            <Dropdown.Toggle id="dropdown-custom">
                
                <img 
                    className='three-dots'
                    src={require(`../images/three-dots.png`)}
                    alt="three dots"
                    onClick={handleClick}
                />
            </Dropdown.Toggle>
            
            {/*MENU*/}
            <div drop="end" id={isActive ? 'my-dropdown-menu' : ''} x-placement="bottom-start" aria-labelledby="dropdown-custom" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" className={isActive ? 'show dropdown-menu' : 'no-show'} >
            
            <div className='dropdown-items-container'>
              <Dropdown.Item eventKey="1" onClick={handleClick} id='dropdown-item-arrow'>
                <img 
                    src={leftArrow}                    
                /> 
              </Dropdown.Item>              
              
              <Dropdown.Item eventKey="2"><Link to='/'>Inicio</Link></Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3"><Link to='/Designs'>Diseño Gráfico</Link></Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4"><Link to='/WebSites' >Sitios Webs</Link></Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="5"><Link to='/Gallery' >Galería</Link></Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item eventKey="6"><Link to='/Blog' >Blog</Link></Dropdown.Item>
              <Dropdown.Divider />
            </div>
              <div  className='social-media-in-menu'>
                <SocialMedia
                  isMenuLogos='true'
                />
              </div>

              </div>         
        </Dropdown>
    </div>      
  );
}

export default DropDown;