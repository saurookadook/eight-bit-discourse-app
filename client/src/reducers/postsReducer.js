import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  all: []
}

// refactor
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_POSTS:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_POSTS:
    // debugger
      return {
        ...state,
        loading: false,
        loaded: true,
        // TODO: refactor to `posts: [...action.posts]`?
        all: action.posts
      }
    case types.UPDATE_POSTS:
      return {
        ...state,
        all: action.posts
      }
    // case type.FETCH_USER_POSTS:
    //   return { ...state, posts: action.posts }
    default:
      return state;
  }
}

export default postsReducer;