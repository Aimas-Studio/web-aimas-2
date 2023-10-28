import { useState, useEffect } from 'react';
import Portada from '../components/promo1';
import SocialDotsHeader from '../components/social-dots-header';
import OvalComponents from '../components/oval-components';
import DesapearText from '../components/desapearing-text';
import '../css/blog-web.css';

function App() {
  const [blogs, setBlog] = useState([])

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
    <div className="BlogWeb main-page-container">
      <SocialDotsHeader/>

      <DesapearText
        text='Blog'
      />

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
      <div className='my-spacer'>
          <br></br>
      </div>
     
      <OvalComponents/>
     
    </div>   
  );
}

export default App;
