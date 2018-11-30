import {combineReducers} from "redux";
import {articleReducer} from '../reducers/article';

export const rootReducer = combineReducers({
    articles: articleReducer,
});