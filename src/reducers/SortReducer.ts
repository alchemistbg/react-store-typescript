import ISortState from './../utils/interfaces/ISortState';
import ISortActions from './../utils/interfaces/ISortActions';

export const initialSortState: ISortState = {
    sort: {
        criteria: '',
        direction: ''
    }
}

export const sortReducer = (state: ISortState, action: ISortActions) => {

    const saveSortData = (data: ISortState) => {
        localStorage.setItem('tsSortData', JSON.stringify(data));
    }

    switch (action.type) {
        case 'LOAD_SORT_FROM_STORAGE':
            state.sort = action.payload.sort;
            return {
                sort: state.sort
            }

        case 'SORT':
            state.sort.criteria = action.payload.sort.criteria;
            state.sort.direction = action.payload.sort.direction;
            saveSortData(state);
            return {
                sort: state.sort
            }

        default:
            return state;
    }
}