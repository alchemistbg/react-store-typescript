import ICartItem from './ICartItem';

interface ICartActions {
    type: 'LOAD_CART_FROM_STORAGE' | 'ADD_TO_CART' | 'INCREMENT' | 'DECREMENT' | 'REMOVE_FROM_CART' | 'CHECKOUT',
    payload: ICartItem,
    cartContent?: ICartItem[]
}

export default ICartActions;