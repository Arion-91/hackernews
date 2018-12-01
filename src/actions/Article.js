import axios from "axios";
import {DEFAULT_HPP, PARAM_HPP, PARAM_PAGE, PARAM_SEARCH, PATH_BASE, PATH_SEARCH} from "../constants";

export const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_REQUEST';
export const GET_ARTICLES_FAIL = 'GET_ARTICLES_REQUEST';
export const SORT_ARTICLES = 'SORT_ARTICLES';
export const DISMISS_ARTICLE = 'DISMISS_ARTICLE';

export function getArticlesRequest() {
    return {
        type: GET_ARTICLES_REQUEST,
    }
}

export function getArticlesSuccess(list) {
    return {
        type: GET_ARTICLES_SUCCESS,
        payload: list,
    }
}

export function getArticlesFail(error) {
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

export function dismissArticle(id) {
    return {
        type: DISMISS_ARTICLE,
        payload: id,
    }
}