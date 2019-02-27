import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import { API_URL } from '../constants/apiUrl';

export function submitComment(formContent) {
  return (dispatch) => {
    return fetch(`${API_URL}/posts/${formContent.postId}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ comment: formContent})})
      .then(response => response.json())
      .then(post => {dispatch({ type: types.UPDATE_POST, post })});
  }
}