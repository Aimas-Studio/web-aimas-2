import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import leftArrow from '../images/arrow-left.png';
import '../css/dropdown.css'

function DropDown() {
  return (
    <>
      <div>
    <div role="group" class="show dropstart btn-group">
        <button type="button" class="btn btn-secondary">Drop left</button>
        <button type="button" id="dropdown-button-drop-start" aria-expanded="true" class="dropdown-toggle dropdown-toggle-split show btn btn-secondary">
            <span class="visually-hidden">Toggle dropdown</span>
        </button>
        <div x-placement="left-start" aria-labelledby="dropdown-button-drop-start" class="dropdown-menu show" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="left-start" style="position: absolute; inset: 0px 0px auto auto; transform: translate3d(-27.2px, 0px, 0px);">
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#"> 
                <img src='../images/arrow-left.png'/> 
            </a>
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">Inicio
            </a>
            <hr class="dropdown-divider" role="separator"/>
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">Diseño Gráfico
            </a>
            <hr class="dropdown-divider" role="separator"/>
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">Sitios Webs
            </a>
            <hr class="dropdown-divider" role="separator"/>
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">Galería</a>
            <hr class="dropdown-divider" role="separator"/>
            <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">Blog</a>
            <hr class="dropdown-divider" role="separator"/>
            </div>
            </div>
        <SplitButton
            key={'start'}
            id={`dropdown-button-drop-${'start'}`}
            drop={'start'}
            variant="secondary"
            title={`Drop ${'left'}`}
        >

              <Dropdown.Item eventKey="1"> <img src={leftArrow}/> </Dropdown.Item>
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
            </SplitButton>
          
      </div>

      {/*
        <div role="group" class="dropstart btn-group">
            <button type="button" class="btn btn-secondary">
            </button>
            <button type="button" id="dropdown-button-drop-start" aria-expanded="false" class="dropdown-toggle dropdown-toggle-split btn btn-secondary">
                <span class="visually-hidden">
                    <Dropdown.Item eventKey="1"> 
                        <img src={leftArrow}/> 
                    </Dropdown.Item>
                    
                    <Dropdown.Item eventKey="2">
                        Inicio
                    </Dropdown.Item>
              
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="3">
                        Diseño Gráfico
                    </Dropdown.Item>
                    
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">
                        Sitios Webs
                    </Dropdown.Item>
                    
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="5">
                        Galería
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="6">
                        Blog
                    </Dropdown.Item>
                    <Dropdown.Divider /></span>
            </button>
        </div>
        */}
    </>
  );
}

export default DropDown;