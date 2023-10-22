import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import leftArrow from '../images/arrow-left.png';
import {useState} from 'react';
import '../css/three-dots.css'
import '../css/dropdown.css'
import SocialMedia from './social-media';



function DropDown() {

    const [isActive, setIsActive] = useState(false);
    
    const handleClick = event => {
        // toggle isActive state on click
        setIsActive(current => !current);
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
            <div drop="start" id="my-dropdown-menu" x-placement="bottom-start" aria-labelledby="dropdown-custom" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" className={isActive ? 'show dropdown-menu' : 'dropdown-menu'} >
            
              <Dropdown.Item eventKey="1" onClick={handleClick}>
                <img 
                    src={leftArrow}                    
                /> 
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Inicio</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3">Diseño Gráfico</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Sitios Webs</Dropdown.Item>
              
              <Dropdown.Divider />
              <Dropdown.Item eventKey="5">Galería</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item eventKey="6">Blog</Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item eventKey="7">
                <SocialMedia/>
              </Dropdown.Item>

              </div>         
        </Dropdown>
    </div>

      
  );
}

export default DropDown;