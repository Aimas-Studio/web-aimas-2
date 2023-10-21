import LogoAndImage from '../components/logo-and-image';
import SocialDotsHeader from '../components/social-dots-header';
import TextInfo from '../components/text-with-info';
import '../css/web-design.css';


function WebDesign() {
    return (
        <div className='WebDesign'>
            <SocialDotsHeader/>

            <LogoAndImage
                logoImage='aimas-logo-small'
                promoImage='cchang-promo-image'
            />

            <TextInfo/>


        </div>
    )
}
export default WebDesign;