import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  all: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_POSTS:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_POSTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        all: action.posts
      }
    case types.UPDATE_POSTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        all: action.posts
      }
    // TODO once component is created
    // case type.FETCH_USER_POSTS:
    //   return { ...state, posts: action.posts }
    default:
      return state;
  }
}

export default postsReducer;