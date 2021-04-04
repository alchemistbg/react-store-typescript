import { createContext } from 'react';
import ICartContextProps from './../utils/interfaces/Props/ICartContextProps';
import { initialCartState } from './../reducers/CartReducer';

const CartContext = createContext<ICartContextProps>({
    cartState: initialCartState,
    cartDispatch: () => { }
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;

export default CartContext;