import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './../../contexts/CartContext';
import ProductTable from './ProductTable/ProductTable';
import CartWrapper from './Cart.styles';
import ICartItem from '../../utils/interfaces/ICartItem';
import ICardItem from './../../utils/interfaces/ICardItem';
import Button from './../common/Button/Button';
import ICartState from './../../utils/interfaces/ICartState';

const Cart = () => {
    document.title = "Compass Store | Cart";

    const cartContext = useContext(CartContext);

    const calcCartTotalSum = (cart: ICartState) => {
        const cartTotalPrice = cart.items.reduce((acc, curr) => {
            return acc + curr.productTotalPrice;
        }, 0);
        return cartTotalPrice;
    }

    const handleRemoveFromCart = (product: ICartItem) => {
        cartContext.cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        });
    };

    const handleDecrement = (product: ICartItem) => {
        cartContext.cartDispatch({
            type: "DECREMENT",
            payload: product,
        });
    };

    const handleIncrement = (product: ICartItem) => {
        cartContext.cartDispatch({
            type: "INCREMENT",
            payload: product,
        });
    };

    const handleCheckout = () => {
        const dummyCartItem = {
            id: 0,
            manufacturer: "",
            name: "",
            description: "",
            images: [],
            sizes: [],
            price: 0,
            timesSold: 0,
            productSize: "",
            productQty: 0,
            productTotalPrice: 0
        }
        cartContext.cartDispatch({
            type: "CHECKOUT",
            payload: dummyCartItem
        });
        // let totalPrice = 0;
        // cart.map((product) => {
        //     totalPrice += +product.totalPrice;
        //     return totalPrice;
        // });
    };

    return <CartWrapper>
        {
            cartContext.cartState.items.length === 0 ? (
                <Fragment>
                    <h1>Your cart is empty</h1>
                    <Link to="/">
                        <h4>Start shopping</h4>
                    </Link>
                </Fragment>
            ) : (
                <Fragment>
                    <h1>Your shopping cart</h1>
                    <ProductTable cart={cartContext.cartState.items}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                    <div className="total-price-wrapper">
                        <h4>
                            <span className="text">Total Price: </span>
                            <span className="price">
                                {calcCartTotalSum(cartContext.cartState)} DKK
							</span>
                        </h4>
                        <Button
                            dataTestId="123"
                            icon=""
                            isDisabled={false}
                            className="form-button cart"
                            onClick={handleCheckout}
                            btnText={"Proceed to Checkout"}
                        />
                    </div>
                </Fragment>
            )
        }
    </CartWrapper>
}

export default Cart;