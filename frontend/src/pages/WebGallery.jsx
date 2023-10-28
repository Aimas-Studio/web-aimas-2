import SocialDotsHeader from '../components/social-dots-header';
import Pagina from '../components/promo2'
import DesapearText from '../components/desapearing-text';
import { useState, useEffect } from 'react';


function WebGallery() {
  //TODO LO QUE ESTÁ COMENTADO ES EL CODIGO QUE LO CONECTA CON EL BACKEND
  const [projects, setProject] = useState([])

  useEffect(()=> {
      async function fetchProject(){
        try {
          const response = await fetch('http://127.0.0.1:8000/api/project/')
          if (!response.ok){
            throw new Error("La red no respondió de manera correcta")
          }
          const result = await response.json();
          setProject(result)
        }
        catch(error){
          console.error('Error consiguiendo los datos', error)
        }}
    fetchProject()
    console.log(projects)
    }, []);
  
    
  return (
    <div className='WebGallery main-page-container'>
      <SocialDotsHeader/>
      <DesapearText
        text='Galería'  
      />
      {
        projects.map((project) =>
          <Pagina
          dir={project.image}
          mainText={project.title}
          secText={project.body}
          implementado={project.type}
          irSitio={project.site}
          url={project.url}  
        />
          )}
    </div>    
  );
}

export default WebGallery;