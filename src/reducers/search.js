import {SEARCH_WRITE, SEARCH_SUBMIT} from '../actions/Search';
import {DEFAULT_QUERY} from "../constants";

const initialState = {
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case (SEARCH_WRITE):
            return {
                ...state,
                searchTerm: action.payload,
            };
        case (SEARCH_SUBMIT):
            return {
                ...state,
                searchKey: state.searchTerm,
            };
        default:
            return state;
    }
}