import SocialDotsHeader from '../components/social-dots-header';
import LogoAndImage from '../components/logo-and-image';
import TextInfo from '../components/text-with-info';
import BlueOval from '../components/blue-oval-promo';
import BlueOvalImage from '../components/blue-oval-image';
import OvalImage from '../components/oval-image';
import ContratarInfoButtons from '../components/contratar-info-buttons';
import '../css/web-sites.css';


function WebSites() {
    return (
        <div className='WebSites'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage='aimas-logo-small'
                promoImage='start-cell-promo'
            />

            <TextInfo
                mainText='Sitios Webs'
                secText='Un sitio web es el equivalente de un local físico en la esfera digital; su diseño, función y la visibilidad que tenga son factores decisivos para nuestro negocio.'
            />


            <div className='container-blue-oval-and-image'>
                <BlueOvalImage
                    word1='Promocional'
                    word2='El primer paso para tener una presencia sólida en internet.'
                    background='movil'
                />
                <OvalImage
                    image='frank-web'
                />
            </div>

            <TextInfo
                mainText=''
                secText='Sitio Web sencillo que contiene una descripción de su empresa, imágenes de los productos y/o servicios que ofrece y botones de contacto.'
            />
            <ContratarInfoButtons
                color1='#467BF7'
                color2='#C7D7FD'
                colorT1='#fff'
                colorT2='#003070'
            />
                     

        </div>
    )
}
export default WebSites;