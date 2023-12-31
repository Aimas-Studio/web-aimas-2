import React, {useState, useEffect} from 'react';
import SocialDotsHeader from '../components/social-dots-header';
import LogoAndImage from '../components/logo-and-image';
import TextInfo from '../components/text-with-info';
import BlueOvalImage from '../components/blue-oval-image';
import OvalImage from '../components/oval-image';
import ContratarInfoButtons from '../components/contratar-info-buttons';
import BlueOvalImageAndImage from '../components/blue-oval-image-and-image';
import OnlyText from '../components/only-text';
import '../css/web-sites.css';


function WebSites() {
    return (
        
        <div className='WebSites main-page-container'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage={'aimas-logo-small'}
                promoImage='start-cell-promo'
            />

            <TextInfo
                specialId='special-text-info'
                mainText='Sitios Webs'
                secText='Un sitio web es el equivalente de un local físico en la esfera digital; su diseño, función y la visibilidad que tenga son factores decisivos para nuestro negocio.'
            />

            <BlueOvalImageAndImage
                word1='Promocional'
                word2='El primer paso para tener una presencia sólida en internet.'
                background='movil'
                image='frank-web'
            />

            <OnlyText
                specialId='special-text-info'
                text='Sitio Web sencillo que contiene una descripción de su empresa, imágenes de los productos y/o servicios que ofrece y botones de contacto.'
            />
            <ContratarInfoButtons
                color1='#467BF7'
                color2='#C7D7FD'
                colorT1='#fff'
                colorT2='#003070'
                servicio='sitios webs promocionales'
            />

            <div className='container-blue-oval-two-images'>
                <BlueOvalImage
                    word1='Insitucional'
                    word2='Página web de varias pestañas en las que se reflejan la información completa de la empresa.'
                    background='rueditas'
                />
                <OvalImage
                    image='promo-web-design'
                />
                <div className='mac-design-container'>
                    <OvalImage
                        image='mac-design'
                    />
                </div>
            </div>

            <OnlyText
                specialId='special-text-info'
                text='Se muestran sus servicios y/o productos, botones de contacto y para acceder a sus redes sociales, una galería de los proyectos realizados y un blog en el que puede publicar contenido afín a su actividad y ganar posicionamiento en los buscadores.'
            />
            <ContratarInfoButtons
                color1='#4EB3E7'
                color2='#C9E8F8'
                colorT1='#fff'
                colorT2='#003070'
                servicio='sitios webs institucionales'
            />

            <BlueOvalImageAndImage
                word1='Tienda Online'
                word2='Aprovecha al máximo las posibilidades del mundo digital
                y vende directamente en él.'
                background='flecha'
                image='camion'
            />
            <OnlyText
                specialId='special-text-info'
                text='Plataforma de ventas en las que usted no solo puede mostrar sus productos o servicios sino que también puede comercializarlos directamente mediante la integración de un carrito de compras. Contiene además todas las funcionalidades del sitio institucional.'
            />
            <ContratarInfoButtons
                color1='#0086CB'
                color2='#B2DAEF'
                colorT1='#fff'
                colorT2='#003070'
                servicio='tienda online.'
            />
                        
        </div>
    )
}
export default WebSites;