//Import external libraries
import { Link } from 'react-router-dom';

//Import internal libraries
import { miscConstants } from './../../utils/misc/miscConstants';

//Import components
import Logo from './Logo/Logo';

//Import styles
import { HeaderWrapper } from './Header.styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <header>
                <div className='site-header'>
                    <Link to={`${miscConstants.basicUrl}`}>
                        <Logo />
                    </Link>
                </div>

            </header>
        </HeaderWrapper>
    );
}

export default Header;
