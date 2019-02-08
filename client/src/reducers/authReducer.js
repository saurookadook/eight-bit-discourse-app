import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: {},
  token: '',
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      }
    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.user,
        token: action.token
      }
    case types.AUTHENTICATION_FAILURE:
      return {
          ...state,
          isAuthenticated: false,
          isAuthenticating: false,
          user: {},
          token: null,
          errors: action.errors || []
      }
    case types.LOGOUT:
      // TODO: logout message?
      return {
          ...state,
          isAuthenticated: false,
          isAuthenticating: false,
          user: {},
          token: null
      }
    default:
      return state;
  }
}
