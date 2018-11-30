import { combineReducers } from 'redux';
import {DEFAULT_QUERY} from "../constants";
import {LOAD_LIST} from "../actions/actions";

const initialState = {

};

function loadListApp(state = initialState, action) {
    switch (action.type) {
        case LOAD_LIST:
            return {
                ...state,
            };
        default:
            return state;
    }
}