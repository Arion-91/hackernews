import axios from "axios";
import {DEFAULT_HPP, PARAM_HPP, PARAM_PAGE, PARAM_SEARCH, PATH_BASE, PATH_SEARCH} from "../constants";

export const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAIL = 'GET_ARTICLES_REQUEST';
export const SORT_ARTICLES = 'SORT_ARTICLES';
export const DISMISS_ARTICLE = 'DISMISS_ARTICLE';

export function getMoreArticles(searchTerm, page) {
    // В middleware будет вызываться данная функция и передавать dispatch чтобы могли вызвать
    // несколько действий пока будет выполняться обращение к API
    return dispatch => {
        dispatch(getArticlesRequest());

        axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(result => dispatch(getArticlesSuccess({
                searchTerm,
                hits: result.data.hits,
                page,
            })))
            .catch(error => dispatch(getArticlesFail(error)));
    }
}

function getArticlesRequest() {
    return {
        type: GET_ARTICLES_REQUEST,
    }
}

function getArticlesSuccess(data) {
    return {
        type: GET_ARTICLES_SUCCESS,
        payload: data,
    }
}

function getArticlesFail(error) {
    return {
        type: GET_ARTICLES_FAIL,
        payload: error,
    }
}

export function sortArticles(title) {
    return {
        type: SORT_ARTICLES,
        payload: title,
    }
}

export function dismissArticle(searchKey, id) {
    return {
        type: DISMISS_ARTICLE,
        payload: {searchKey, id},
    }
}