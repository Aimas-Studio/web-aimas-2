import SocialMedia from './social-media';
import ThreeDots from './three-dots';
import '../css/social-dots-header.css'

function SocialDotsHeader() {
    return (
        <div className='contenedor-header'>
            <SocialMedia/>
            <ThreeDots/>
        </div>
    )
}

export default SocialDotsHeader;