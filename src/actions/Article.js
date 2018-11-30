export const SEARCH_LIST = 'SEARCH_LIST';
export const SORT = 'SORT';
export const LOAD_LIST = 'LOAD_LIST';
export const DISMISS_ARTICLE = 'DISMISS_ARTICLE';

export function searchList(text) {
    return {
        type: SEARCH_LIST,
        payload: text,
    }
}

export function sortBy(title) {
    return {
        type: SORT,
        payload: title,
    }
}

export function loadList(page) {
    return {
        type: LOAD_LIST,
        payload: page,
    }
}

export function dismissArticle(id) {
    return {
        type: DISMISS_ARTICLE,
        payload: id,
    }
}