import {
    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,
    SORT_ARTICLES,
    DISMISS_ARTICLE
} from "../actions/Article";

const initialState = {
    results: null,
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
                results: updateSearchTopStoriesState(state, action.payload),
                error: '',
                isLoading: false,
            };
        case GET_ARTICLES_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        // case SORT_ARTICLES:
        //     return {
        //         ...state,
        //         list: state.results.sort(),
        //     };
        // case DISMISS_ARTICLE:
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
}

const updateSearchTopStoriesState = (prevState, {searchTerm, hits, page}) => {
    const {results} = prevState;
    const searchKey = searchTerm;

    const oldHits = results && results[searchKey]
        ? results[searchKey].hits
        : [];

    const updateHits = [
        ...oldHits,
        ...hits
    ];

    return {
        ...results,
        [searchKey]: {hits: updateHits, page}
    };
};