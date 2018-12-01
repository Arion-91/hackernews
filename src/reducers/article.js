import {GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, SORT_ARTICLES, DISMISS_ARTICLE} from "../actions/Article";

const initialState = {
    list: [],
    error: null,
    isLoading: false,
};

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_REQUEST:
            return {
                ...state,
                error: '',
                isLoading: true,
            };
        case GET_ARTICLES_SUCCESS:
            return {
                list: [...state.list, action.payload],
                error: '',
                isLoading: false,
            };
        case GET_ARTICLES_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case SORT_ARTICLES:
            return {
                ...state,
                list: state.list.sort(),
            };
        case DISMISS_ARTICLE:
            return {
                ...state,
            };
        default:
            return state;
    }
}