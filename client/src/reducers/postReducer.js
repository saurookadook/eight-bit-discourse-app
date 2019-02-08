import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  post: {}
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMITTING_POST:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case types.LOADING_POST:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case types.FETCH_POST:
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.post
      }
    // TODO once component is created
    // case types.FETCH_USER_POST:
    //   return { ...state, post: action.post }
    
    case types.UPDATE_POST:
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.post
      }
    default:
      return state;
  }
}

export default postReducer;