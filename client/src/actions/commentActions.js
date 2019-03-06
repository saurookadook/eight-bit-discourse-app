import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import { API_URL } from '../constants/apiUrl';

export function submitComment(formContent) {
  return (dispatch) => {
    return fetch(`${API_URL}/posts/${formContent.post_id}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ comment: formContent})})
      .then(response => response.json())
      .then(post => {dispatch({ type: types.SET_POST, post })});
  }
}

export function deleteComment(comment) {
  // debugger
  return (dispatch) => {
    return fetch(`${API_URL}/posts/${comment.post_id}/comments/${comment.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment })
    })
    .then(response => response.json())
    .then(post => {dispatch({ type: types.SET_POST, post})});
  }
}