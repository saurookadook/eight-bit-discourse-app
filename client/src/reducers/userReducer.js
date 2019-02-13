import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  user: null
}

const userReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default userReducer;