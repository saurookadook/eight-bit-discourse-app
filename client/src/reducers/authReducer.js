import * as types from '../actions/actionTypes';

const authLocal = () => {
  return localStorage.token ? true : false;
}

const userLocal = () => {
  if (localStorage.user) {
    return JSON.parse(localStorage.user);  
  }
  return null;
}

const authToken = () => {
  if (localStorage.token && localStorage.token !== '') {
    return localStorage.token;
  }
  return null;
}

const initialState = {
  isAuthenticated: authLocal(),
  isAuthenticating: false,
  user: userLocal(),
  token: authToken(),
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
          user: null,
          token: null,
          errors: action.errors || []
      }
    case types.LOGOUT:
      // TODO: logout message?
      return {
          ...state,
          isAuthenticated: false,
          isAuthenticating: false,
          user: null,
          token: null
      }
    default:
      return state;
  }
}
