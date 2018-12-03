import {
    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAIL,
    DISMISS_ARTICLE
} from "../actions/Article";

const initialState = {
    results: null,
    error: '',
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
        case DISMISS_ARTICLE:
            return {
                ...state,
                results: updateStoriesAfterDismiss(state.results, action.payload),
            };
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

const updateStoriesAfterDismiss = (results, {searchKey, id}) => {
    const { hits, page } = results[searchKey];

    const updatedList = hits.filter(value => value.objectID !== id);

    return {
        ...results,
        [searchKey]: {hits: updatedList, page}
    };
};