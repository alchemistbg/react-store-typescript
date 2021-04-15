import ICartItem from './ICartItem';

interface ISortActions {
    type: 'LOAD_SORT_FROM_STORAGE' | 'SORT',
    // payload: ICartItem[],
    payload: string,
    sortCriteria: string
}

export default ISortActions;