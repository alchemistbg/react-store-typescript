//Import external libraries

//Import internal libraries
import { miscConstants } from '../../../utils/miscConstants';

//Import components

//Import styles

const Logo = () => {
    return <div className="site-logo">
        <img
            className="logo-image"
            src={`${miscConstants.basicUrl}/static/images/logo.png`}
            alt="Compass Store Logo"
        />
        <div className="logo-text">
            <h2 className="logo-text">Compass Shop</h2>
            <h6 className="logo-subtext">for DEDICATED fans</h6>
        </div>
    </div>
}

export default Logo;
