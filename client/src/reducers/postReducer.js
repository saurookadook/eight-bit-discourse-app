import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  post: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_POST:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case types.SET_POST:
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.post
      }
    // TODO once component is created
    // case types.FETCH_USER_POST:
    //   return { ...state, post: action.post }
    default:
      return state;
  }
}

export default postReducer;