import {combineReducers} from "redux";
import {articleReducer} from '../reducers/article';
import {searchReducer} from '../reducers/search';

export const rootReducer = combineReducers({
    articles: articleReducer,
    search: searchReducer,
});