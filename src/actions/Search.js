import {DEFAULT_QUERY} from "../constants";

export const SEARCH_WRITE = 'SEARCH_WRITE';
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';

export function searchWrite(key) {
    return {
        type: SEARCH_WRITE,
        payload: key,
    }
}

export function searchSubmit() {
    return {
        type: SEARCH_SUBMIT,
    }
}