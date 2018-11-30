import axios from "axios";
import {DEFAULT_HPP, PARAM_HPP, PARAM_PAGE, PARAM_SEARCH, PATH_BASE, PATH_SEARCH} from "../constants";

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

function fetchSearchTopStories(searchTerm, page = 0) {
    // this.setState({
    //     isLoading: true
    // });
    //
    // axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    //     .then(result => this._isMounted && this.setSearchTopStories(result.data))
    //     .catch(error => this._isMounted && this.setState({ error }));



    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
        .then(result => fetchSearchSuccess(result))
        .catch(error => fetchSearchError(error));
}

function fetchSearchSuccess(result) {
    // this._isMounted && this.setSearchTopStories(result.data);
    console.log(result);
}

function fetchSearchError(error) {
    // this._isMounted && this.setState({ error })
    console.log(error);
}