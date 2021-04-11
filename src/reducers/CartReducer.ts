import ICartActions from '../utils/interfaces/ICartActions';
import ICartState from './../utils/interfaces/ICartState';

export const initialCartState: ICartState = {
    items: {}
}

export const cartReducer = (state: ICartState, action: ICartActions) => {
    let item = action.payload;
    let { items } = state;

    let itemIndex: number;

    // if (action.type === 'ADD_TO_CART') {
    //     itemIndex = state.items.findIndex((cartItem) => {
    //         console.log(cartItem)
    //     })
    // }

    const updateCart = (items: ICartState) => {
        localStorage.setItem("cartData", JSON.stringify(items));
    }

    switch (action.type) {
        case 'LOAD_CART_FROM_STORAGE':
            const cartContent = action.cartContent;
            console.log(cartContent);
            if (cartContent !== undefined) {
                items = cartContent;
            }
            return { ...state, items };

        case 'ADD_TO_CART':
            if (itemIndex > -1) {
                items[itemIndex].productQty += item.productQty;
                items[itemIndex].productTotalPrice = (items[itemIndex].productQty * items[itemIndex].price);
                updateCart(items);
                return { ...state, items }
            } else {
                const product = { ...action.payload };
                const productTotalPrice: number = product.price * product.productQty;
                product.productTotalPrice = productTotalPrice;
                items.push(product);
                updateCart(items);
                return { ...state, items };
            }

        case 'INCREMENT':
            items[itemIndex].productQty += 1;
            items[itemIndex].productTotalPrice = (items[itemIndex].productQty * items[itemIndex].price);
            updateCart(items);
            return { ...state, items };

        case 'DECREMENT':
            if (items[itemIndex].productQty > 1) {
                items[itemIndex].productQty -= 1;
                items[itemIndex].productTotalPrice = (items[itemIndex].productQty * items[itemIndex].price);
            }
            updateCart(items);
            return { ...state, items };

        case 'REMOVE_FROM_CART':
            items = items.filter((item, index) => {
                if (index !== itemIndex) {
                    return item;
                }
                return false;
            })

            if (items.length > 0) {
                updateCart(items);
            } else {
                clearCart();
            }

            return { ...state, items };

        case 'CHECKOUT':
            items = [];
            clearCart();
            return { items };

        default:
            return state;
    }
}