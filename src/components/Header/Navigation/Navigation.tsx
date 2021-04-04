import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavigationWrapper from './Navigation.styles';
import CartContext from './../../../contexts/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Navigation = () => {
    const [cartItemsCount, setCartItemsCount] = useState<number>(0);

    const cartContext = useContext(CartContext);

    useEffect(() => {
        let _count = 0;

        for (let key in cartContext.cartState.items) {
            _count += cartContext.cartState.items[key].length;
        }

        if (_count === cartItemsCount) {
            return
        };

        setCartItemsCount(_count);
    }, [cartContext, cartItemsCount]);

    return <NavigationWrapper>
        <ul className="nav-list">
            <li className="nav-item cart">
                {/* <Link to={`${miscConstants.basicUrl}/cart`}> */}
                <Link to={`/cart`}>
                    <span className="cart-icon">
                        <p className="cart-items">{cartItemsCount}</p>
                    </span>
                </Link>
            </li>
        </ul>
    </NavigationWrapper>
}

export default Navigation;