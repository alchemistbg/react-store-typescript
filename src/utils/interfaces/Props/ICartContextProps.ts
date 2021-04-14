import ICartActions from "./../ICartActions";
import ICartState from "./../ICartState";

interface ICartContextProps {
    cartState: ICartState;
    cartDispatch: React.Dispatch<ICartActions>;
}

export default ICartContextProps;