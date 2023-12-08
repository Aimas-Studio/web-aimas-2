import SocialDotsHeader from '../components/social-dots-header';
import Pagina from '../components/promo2'
import DesapearText from '../components/desapearing-text';
import { useState, useEffect } from 'react';


function WebGallery() {
  //TODO LO QUE ESTÁ COMENTADO ES EL CODIGO QUE LO CONECTA CON EL BACKEND
  const [projects, setProject] = useState({'data': []})

  useEffect(()=> {
      async function fetchProject(){
        try {
          const response = await fetch('https://backend-aimas.onrender.com/api/projects?populate=*')
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
    }, []);
  
    
  return (
    <div className='WebGallery main-page-container'>
      <SocialDotsHeader/>
      <DesapearText
        text='Galería'  
      />
      {
        projects.data.map((project) =>
          <Pagina
          dir={project.attributes.image.data.attributes.url}
          mainText={project.attributes.title}
          secText={project.attributes.body}
          implementado={project.attributes.type}
          irSitio={project.attributes.site}
          url={project.attributes.url}  
        />
          )}
    </div>    
  );
}

export default WebGallery;
