import fetch from 'isomorphic-fetch';
import { API_URL } from '../constants/apiUrl';
import * as types from './actionTypes.js';

const authRequest = () => {
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = errors => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
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
      body: JSON.stringify({user: user}),
    })
      .then(response => response.json())
      // TODO: change to `.then(jresp => dispatch(authenticate({jresp})))`?
      .then(jresp => {
        dispatch(authenticate({
          name: user.username,
          email: user.email,
          password: user.password})
        );
      })
      .catch(errors => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = authCredentials => {
  return dispatch => {
    dispatch(authRequest())
    const request = new Request(`${API_URL}/user_token`, {
      method: "POST",
      headers: new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({authCredentials}),
    })

    return fetch(request)
      .then(resp => resp.json())
      .then(response => {
          // const token = response.jwt;
          localStorage.setItem('token', response.jwt);
          return getUser(authCredentials)
      })
      .then(user => {
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch(errors => {
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

    // return fetch(`${API_URL}/user_token`, {
    //   method: 'POST',
    //   // mode: 'no-cors',
    //   // credentials: 'include',
    //   headers: {
    //     // 'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({auth: authCredentials}),
    //   // credentials: 'same-origin'
    // })

export const getUser = userCredentials => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: userCredentials}),
  })
  
  return fetch(request)
    .then(response => response.json())
    .then(userJson => userJson)
    .catch(errors => {
      // dispatch(authFailure(errors))
      return authFailure(errors)
    })
};

  // return fetch(`${API_URL}/find_user`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${localStorage.token}`
  //   },
  //   body: JSON.stringify({
  //     user: userCredentials
  //   }),
  //   credentials: 'same-origin'
  // })
