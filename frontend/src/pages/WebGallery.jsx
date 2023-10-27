import SocialDotsHeader from '../components/social-dots-header';
import Pagina from '../components/promo2'
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


  // return (
  //   <div className="WebsDone">
  //     <SocialDotsHeader/>
  //         <Pagina
  //         dir={require('../images/cchang-promo-image.png')}
  //         mainText='CChang S.U.R.L'
  //         secText='Página web institucional para empresa constructora CChang S.U.R.L. La misma contiene la descripción de la empresa, los servicios que ofrece, una galería de proyectos, su contacto y redes sociales.'
  //         implementado='-IMPLEMENTADO-'
  //         irSitio={true}
  //         url={''}  
  //       />
  //   </div>    
  // );
}

export default WebGallery;