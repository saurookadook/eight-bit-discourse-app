import { combineReducers } from 'redux';
import auth from './authReducer';
import posts from './postsReducer';
import post from './postReducer';

export const rootReducer = combineReducers({
    auth,
    posts,
    post
})