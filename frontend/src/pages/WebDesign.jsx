import LogoAndImage from '../components/logo-and-image';
import SocialDotsHeader from '../components/social-dots-header';
import TextInfo from '../components/text-with-info';
import BlueOvalComponentsImage from '../components/blue-oval-components-image';
import '../css/web-design.css';


function WebDesign() {
    return (
        <div className='WebDesign'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage='aimas-logo-small'
                promoImage='cchang-promo-image'
            />

            <TextInfo
                mainText='Diseño Gráfico'
                secText='El diseño gráfico es imprescindible para la creación y/o consolidación de su empresa. A continuación les mostramos los servicios que nuestro estudio ofrece para usted en este sector:'
            />

            <BlueOvalComponentsImage
                image1='cchang-promo'
                image2='aimas-studio-promo'
                mainText='Diseño de Marcas'
                secText='Si tiene una idea de negocio nosotros lo ayudamos a materializarla.'
                backImage='pincel-fondo'
            />


        </div>
    )
}
export default WebDesign;