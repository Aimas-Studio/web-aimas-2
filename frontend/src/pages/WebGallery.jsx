import '../css/webs-done.css';
import SocialDotsHeader from '../components/social-dots-header';
import Pagina from '../components/promo2'
import { useState, useEffect } from 'react';



function WebGallery() {
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
    <div className="WebsDone">
      <SocialDotsHeader/>
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