import { createContext } from 'react';
import ISortContextProps from './../utils/interfaces/Props/ISortContextProps';
import { initialSortState } from './../reducers/SortReducer';

const SortContext = createContext<ISortContextProps>({
    sortState: initialSortState,
    sortDispatch: () => { }
});

export const SortContextConsumer = SortContext.Consumer;
export const SortContextProvider = SortContext.Provider;

export default SortContext;