import '../css/blog-web.css';
import Portada from '../components/promo1'
import SocialDotsHeader from '../components/social-dots-header';
import OvalComponents from '../components/oval-components';
import { useState, useEffect } from 'react';


function App() {
//TODO LO QUE ESTÁ COMENTADO ES EL CODIGO QUE LO CONECTA CON EL BACKEND
  /*const [blogs, setBlog] = useState([])

  useEffect(()=> {
    async function fetchBlog(){
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blogs/')
        if (!response.ok){
          throw new Error("La red no respondió de manera correcta")
        }
        const result = await response.json();
        setBlog(result)
      }
      catch(error){
        console.error('Error consiguiendo los datos', error)
      }}

    fetchBlog()
    console.log(blogs)
    }, []);

  return (
    <div className="App">
      <SocialDotsHeader/>
      <div className='contenedor-general'>
        {
          blogs.map((blog) =>
            <Portada
            dir={blog.image}
            mainText={blog.title}
            secText={blog.body}
            />
          )
        }
      </div>
     
      <OvalComponents/>
     
    </div>   
  );*/
  return (
    <div className="App">
      <SocialDotsHeader/>
      <div className='contenedor-general'>
            <Portada
            dir={require('../images/promo-A.png')}
            mainText='El secreto del éxito empresarial: ¡Descubre el poder del logo!'
            secText='Un identificador visual, conocido comúnmente como logotipo, es de vital importancia para tu negocio. No se trata simplemente de un dibujo o una imagen, sino de la representación visual de'
            />
      </div>
     
      <OvalComponents/>
     
    </div>   )
}

export default App;
