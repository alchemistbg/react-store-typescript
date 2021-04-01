//Import external libraries
import { Link } from 'react-router-dom';

//Import internal libraries
import { miscConstants } from '../../utils/miscConstants';

//Import components
import Logo from './../common/Logo/Logo';

//Import styles
import { FooterWrapper } from './Footer.styles';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className='site-footer'>
                {/* <Link to={`${miscConstants.basicUrl}`}>
                        <Logo />
                    </Link> */}
                    Footer
                </div>
        </FooterWrapper>
    );
}

export default Footer;