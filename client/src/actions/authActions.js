import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants/apiUrl';
import * as types from './actionTypes.js';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  };
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  };
}

const authFailure = errors => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  };
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}

export const signup = user => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(
          { 
            user: {
              username: user.username,
              email: user.email,
              password: user.password
            }
          }
        ),
    })
      .then(resp => {
        debugger
        if (resp.status > 200) {
          throw resp.json();
        }
        return resp.json();
      })
      // TODO: change to `.then(jresp => dispatch(authenticate({jresp})))`?
      .then(jresp => {
        dispatch(authenticate({
          username: user.username,
          email: user.email,
          password: user.password})
        );
      })
      .catch(errors => {
        debugger
        console.log(errors);
        return errors;
        // dispatch(authFailure(errors))
      });
  };
}

export const authenticate = authCredentials => {
  // debugger
  return dispatch => {
    dispatch(authRequest())
    const request = new Request(`${API_URL}/user_token`, {
      method: "POST",
      headers: new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ auth: authCredentials }),
    });

    return fetch(request)
      .then(resp => {
        // debugger
        // TODO: better way?
        if (!resp.ok) {
          throw resp.status;
        }
        return resp.json();
      })
      .then(jresp => {
          localStorage.setItem('token', jresp.jwt);
          return getUser(authCredentials);
      })
      .then(user => {
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(authSuccess(user, localStorage.token));
      })
      .catch(errors => {
          // dispatch(authFailure(errors));
          localStorage.clear();
          return errors;
      })
  }
}

export const getUser = userCredentials => {
  const request = new Request(`${API_URL}/find_user`, {
    // TODO: seems odd...?
    method: "POST",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: userCredentials}),
  });
  
  return fetch(request)
    .then(response => response.json())
    .then(userJson => userJson)
    .catch(errors => {
      return authFailure(errors);
    });
};