import './App.css';
import Portada from './components/promo1'
import Oval from './components/oval-promo'
import BlueOval from './components/blue-oval-promo';
import SocialDotsHeader from './components/social-dots-header';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([])
  useEffect(()=> {
    async function fetchData(){
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blogs/')
        if (!response.ok){
          throw new Error("La red no respondió de manera correcta")
        }
        const result = await response.json();
        setData(result)
      }
      catch(error){
        console.error('Error consiguiendo los datos', error)
      }}
    
    fetchData()
    }, []);

  return (
    <div className="App">
      <SocialDotsHeader/>
      <div className='contenedor-general'>
        <Portada
          dir='promo-A'
          mainText='El secreto del éxito empresarial: ¡Descubre el poder del logo!'
          secText='Un identificador visual, conocido comúnmente como logotipo, es de vital importancia para tu negocio. No se trata simplemente de un dibujo o una imagen, sino de la representación visual de '
          />
          <Portada
          dir='promo-B'
          mainText='¡El logo de Apple no siempre fue la mazana mordida!'
          secText='El diseño gráfico es una disciplina esencial en el mundo empresarial, ya que juega un papel fundamental en la forma en que las marcas se comunican visualmente con su público objetivo. Una de las herramientas más poderosas dentro '
          />
      </div>
     
      <div className='oval-components-container'>
        <span className='regular-ovals'>
          <Oval
              word1='Diseño'
              word2='Gráfico'
              imageColor='red'
          />
          <Oval
              word1='Sitios'
              word2='Webs'
              imageColor='blue'
          />
        </span>
        <BlueOval
          word1='¿Quiénes somos?'
          word2='Somos un Estudio de Diseño especializado en la creación de marcas y sitios webs.'
        />
      </div>
     
    </div>   
  );
}

export default App;
