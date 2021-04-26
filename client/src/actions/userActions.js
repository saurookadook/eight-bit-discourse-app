import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import { API_URL } from '../constants/apiUrl';

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({ type: types.UPDATING_USER_INFO });

    return fetch(`${API_URL}/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(user => dispatch({ type: types.FETCH_USER_INFO, user })
      );
  }
}
