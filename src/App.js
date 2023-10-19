import './App.css';
import Portada from './components/promo1'

function App() {
  return (
    <div className="App">
     <div className='contenedor-general'>
       <Portada
        imgLetter='A'
        mainText='El secreto del éxito empresarial: ¡Descubre el poder del logo!'
        secText='Un identificador visual, conocido comúnmente como logotipo, es de vital importancia para tu negocio. No se trata simplemente de un dibujo o una imagen, sino de la representación visual de '
        />
        <Portada
        imgLetter='B'
        mainText='!El logo de Apple no siempre fue la mazana mordida !'
        secText='El diseño gráfico es una disciplina esencial en el mundo empresarial, ya que juega un papel fundamental en la forma en que las marcas se comunican visualmente con su público objetivo. Una de las herramientas más poderosas dentro '
        />
     </div>
    </div>
  );
}

export default App;
