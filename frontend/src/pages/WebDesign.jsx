import React, { useState, useEffect } from 'react';
import LogoAndImage from '../components/logo-and-image';
import SocialDotsHeader from '../components/social-dots-header';
import TextInfo from '../components/text-with-info';
import BlueOvalComponentsImage from '../components/blue-oval-components-image';
import ContratarInfoButtons from '../components/contratar-info-buttons';
import BlueOvalImageText from '../components/blue-oval-image-text';
import OnlyText from '../components/only-text';
import '../css/web-design.css';


function WebDesign() {
    return (
        <div className='WebDesign main-page-container'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage={'aimas-logo-small'}
                promoImage='cchang-promo-image'
            />

            <TextInfo
                mainText='Diseño Gráfico'
                secText='El diseño gráfico es imprescindible para la creación y/o consolidación de su empresa. A continuación les mostramos los servicios que nuestro estudio ofrece para usted en este sector:'
                specialId='special-text-info'
            />

            <BlueOvalComponentsImage
                image1='cchang-promo'
                image2='aimas-studio-promo'
                mainText='Diseño de Marcas'
                secText='Si tiene una idea de negocio nosotros lo ayudamos a materializarla.'
                backImage='pincel-fondo'
            />
            <OnlyText
                text='Diseñamos el nombre de su empresa, su identificador visual (Logotipo) y las aplicaciones del mismo pautados en un manual de identidad visual.'
                specialId='special-text-info'
            />
            <OnlyText
                text='Este servicio incluye el diseño de todos los soportes necesarios para la marca como sus redes sociales, catálogos o cartas menú, tarjetas de presentación, uniformes y más.'
                specialId='special-text-info'
            />

            <ContratarInfoButtons
                color1='#467BF7'
                color2='#C7D7FD'
                colorT1='#fff'
                colorT2='#003070'
                servicio='diseño de marcas'
            />

            <BlueOvalComponentsImage
                image1='java-promo'
                image2='cairos-promo'
                mainText='Gestión de Redes'
                secText='La presencia en las redes sociales es vital para el contacto de un negocio con su público meta.'
                backImage='lupa'
            />

            <OnlyText
                specialId='special-text-info'
                text='En este servicio le ofrecemos distintos paquetes que incluyen la creación de un plan temático de contenido, el diseño de post y edición de videos y la publicación de los mismos.'
            />
            <OnlyText
                specialId='special-text-info'
                text='Garantizando siempre un aumento de la cantidad de seguidores.'
            />
            
            <ContratarInfoButtons
                color1='#5846F7'
                color2='#CCC7FD'
                colorT1='#fff'
                colorT2='#1A00FF'
                servicio='gestión de redes.'
            />

            <BlueOvalImageText
                mainText='Otros Servicios'
                secText='Si usted lo que desea es un servicio independiente como:'
                backImage='varita'
            />
            

        </div>
    )
}
export default WebDesign;