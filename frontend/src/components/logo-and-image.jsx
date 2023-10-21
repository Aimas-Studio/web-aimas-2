import '../css/logo-and-image.css';

function LogoAndImage( {logoImage, promoImage} ) {
    return (
        <div className='LogoAndImage'>

            <div className='logo-container'>
                <img 
                    src={require(`../images/${logoImage}.png`)}
                    className='logo-image'
                    alt = "Aimas Studio Logo"
                /> 
            </div>
            <div className='promoi-container'>
                <img
                    src={require(`../images/${promoImage}.png`)}
                    className='promo-image'
                    alt="Promo Content"
                />
            </div>

        </div>
    )
}
export default LogoAndImage;