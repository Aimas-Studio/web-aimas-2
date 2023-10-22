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
          )
        }
{/*       

			<Pagina
        dir='webs-developed/elencanto'
        mainText='El Encanto Liquidation'
        secText='Tienda Online creada para compañía de liquidación radicada en Texas, USA. Contiene carrito de compras integrado, botón de contacto, redes sociales y una pestaña para cada categoría de productos.'
				implementado='-IMPLEMENTADO-'
				irSitio='-IR AL SITIO-'
      />

			<Pagina
        dir='webs-developed/karitex'
        mainText='Karitex S.U.R.L'
        secText='Pagina para redes sociales de empresa
				de confecciones textiles Karitex S.U.R.L.'
				implementado='-IMPLEMENTADO-'
				irSitio=''
      />

			<Pagina
        dir='webs-developed/turquino-tryp'
        mainText='Turquino Tryp Havana Libre'
        secText='Diseño de Cartel promocional para evento temático del proyecto de organización de eventos SAFARI y póster de ofertas disponibles para la discoteca Turquino del hotel Tryp Havana Libre.'
				implementado='-IMPLEMENTADO-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/portafolio'
        mainText='Portafolio desarrollador'
        secText='Diseño del portafolio del desarrollador web Frank Pérez Fleita.'
				implementado='-IMPLEMENTADO-'
				irSitio='-IR AL SITIO-'
      />
			<Pagina
        dir='webs-developed/gym-midtown'
        mainText='GYM Midtown'
        secText='Página web (Servicio) creada para la gestión de la asistencia en GYM Midtown,de Houston, USA.'
				implementado='-PRÓXIMO A IMPLEMENTARSE-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/choco-thay'
        mainText='Choco Thay'
        secText='Diseño de identificador visual y etiquetas para chocolatería.'
				implementado='-IMPLEMENTADO-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/elbisne'
        mainText='El Bisne'
        secText='Creación del nombre de marca, identificador visual, manual de identidad y sitio web de la plataforma "El Bisne".
				Proyecto que permite a los emprendedores cubanos tener un mini sitio web por un precio módico de alojamiento mensual.'
				implementado='-PRÓXIMO A IMPLEMENTARSE-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/safari'
        mainText='Safari'
        secText='Identificador visual para proyecto de organización de eventos SAFARI.'
				implementado='-IMPLEMENTADO-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/ld-lavanderia'
        mainText='L´D Lavandería'
        secText='Diseño de identificador visual y tablilla de precios para lavandería radicada en La Lisa.'
				implementado='-IMPLEMENTADO-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/cchang2'
        mainText='CChang S.U.R.L'
        secText='Diseño de identificador visual, tarjetas de presentación, credenciales y otros soportes como parte de un Manual de Identidad Visual para la empresa constructora CChang.'
				implementado='-PRÓXIMO A IMPLEMENTARSE-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/startcell'
        mainText='Start Cell'
        secText='Diseño de sitio web para taller de celulares. En la página los clientes pueden ver el estado de reparación de sus dispositivo, conocer los datos del negocio y acceder a su tienda online.'
				implementado='-IMPLEMENTADO-'
				irSitio='-IR AL SITIO-'
      />
			<Pagina
        dir='webs-developed/eli-salon'
        mainText='Eli Salon'
        secText='Propuesta de identificador visual para salón de belleza especializado en tratamientos faciales y arreglo de cejas.'
				implementado='-PROPUESTA-'
				irSitio=''
      />
			<Pagina
        dir='webs-developed/trade-travel'
        mainText='Trade and Travel'
        secText='Rediseño de marca gráfica para plataforma de cursos online sobre trading y viajes creada por Terry Ijeoma, reconocida especialista del sector.'
				implementado='-PROPUESTA-'
				irSitio=''
      /> */}


    </div>    
  );
}

export default WebGallery;