import ISortActions from "./../ISortActions";
import ISortState from "./../ISortState";

interface ISortContextProps {
    sortState: ISortState;
    sortDispatch: React.Dispatch<ISortActions>;
}

export default ISortContextProps;