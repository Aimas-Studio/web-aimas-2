import { useState, useEffect } from 'react';
import Portada from '../components/promo1';
import SocialDotsHeader from '../components/social-dots-header';
import OvalComponents from '../components/oval-components';
import DesapearText from '../components/desapearing-text';
import '../css/blog-web.css';

function BlogWeb() {
  const [link, setLink] = useState("/#quienes-somos-section")
  const [blogs, setBlog] = useState([])

  useEffect(()=> {
    async function fetchBlog(){
      try {
        const response = await fetch('https://backend-aimas.onrender.com/api/blogs?populate=*')
        if (!response.ok){
          throw new Error("La red no respondió de manera correcta")
        }
        const result = await response.json();
        setBlog(result)
      }
      catch(error){
        console.error('Error consiguiendo los datos', error)
      }
    }

    fetchBlog()
  }, []);
  return (
    <div className="BlogWeb main-page-container">
      <SocialDotsHeader/>

      <DesapearText
        text='Blog'
      />

      <div className='contenedor-general'>
        {
          blogs.data.map((blog) =>
            <Portada
            dir={blog.attributes.image.data.attributes.url}
            mainText={blog.attributes.nombre}
            secText={blog.attributes.body}
            />
          )
        }
      </div>
      <div className='my-spacer'>
          <br></br>
      </div>
     
      <OvalComponents
      linkPage={link}
      />
     
    </div>   
  );
}

export default BlogWeb;
