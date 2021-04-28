import { useContext } from 'react';
import CartContext from './../../contexts/CartContext';

//Import external libraries
import { Link } from 'react-router-dom';

//Import internal libraries
import { miscConstants } from '../../utils/miscConstants';

//Import components
import Logo from './../common/Logo/Logo';
import Navigation from './Navigation/Navigation';

//Import styles
import HeaderWrapper from './Header.styles';

const Header = () => {
    const cartContext = useContext(CartContext);

    const handleOnLoad = () => {
        const storedCart = localStorage.getItem("tsCartData");
        if (storedCart !== null) {
            cartContext.cartDispatch({
                type: "LOAD_CART_FROM_STORAGE",
                payload: JSON.parse(storedCart),
                cartContent: JSON.parse(storedCart),
            });
        }
    }

    return (
        <HeaderWrapper>
            <div className='site-header' onLoad={handleOnLoad}>
                {/* <Link to="/"> */}
                <Link to={`${miscConstants.baseUrl}`}>
                    <Logo />
                </Link>
                <Navigation />
            </div>
        </HeaderWrapper>
    );
}

export default Header;
