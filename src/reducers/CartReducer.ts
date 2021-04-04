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
        case 'ADD_TO_CART':
            console.log(item)
            if (items[item.item.name]) {
                items[item.item.name].push(item);
            } else {
                items[item.item.name] = [item];
            }

            // console.log(item)
            return { ...state, items }

        default:
            return state;
    }
}