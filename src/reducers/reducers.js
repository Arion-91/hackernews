import { combineReducers } from 'redux';
import {DEFAULT_QUERY} from "../constants";
import {SEARCH_LIST, LOAD_LIST, SORT, DISMISS_ARTICLE} from "../actions/Article";

const initialState = {
    articles: [],
    searchKey: '',
    searchTerm: DEFAULT_QUERY,
    error: null,
    isLoading: false,
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_LIST:
            return {
                ...state,
                searchKey: action.payload,
                searchTerm: action.payload,
                error: '',
                isLoading: false,
            };

        case LOAD_LIST:
            return {
                ...state,
                error: '',
                isLoading: true,
            };

        case SORT:
            return {
                ...state,
                articles: action.payload,
            };

        case DISMISS_ARTICLE:
            return {
                ...state,
                articles: action.payload,
            };

        default:
            return state;
    }
}