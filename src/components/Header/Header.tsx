//Import external libraries
import { Link } from 'react-router-dom';

//Import internal libraries
import { miscConstants } from '../../utils/miscConstants';

//Import components
import Logo from './../common/Logo/Logo';

//Import styles
import { HeaderWrapper } from './Header.styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className='site-header'>
                {/* <Link to={`${miscConstants.basicUrl}`}> */}
                <Link to="/">
                    <Logo />
                </Link>
            </div>
        </HeaderWrapper>
    );
}

export default Header;
