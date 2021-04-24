import ISortState from './ISortState';

interface ISortActions {
    type: 'LOAD_SORT_FROM_STORAGE' | 'SORT',
    payload: ISortState
}

export default ISortActions;