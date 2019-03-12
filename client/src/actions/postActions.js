import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import { API_URL } from '../constants/apiUrl';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: types.LOADING_POSTS });

    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(posts => { dispatch({
          type: types.SET_POSTS,
          posts
        })
      });
  }
}

export const fetchPost = postId => {
    return (dispatch) => {
      dispatch({ type: types.LOADING_POST });
      return fetch(`${API_URL}/posts/${postId}`)
        .then(response => response.json())
        .then(post => { dispatch({ 
            type: types.SET_POST,
            post
          })
        });
    }
  }

export const submitPost = (formContent) => {
  return (dispatch) => {
    dispatch({ type: types.LOADING_POST })
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({post: formContent})
    })
      .then(response => response.json())
      .then(posts => dispatch({ 
        type: types.SET_POSTS, 
        posts }));
  }
}

export const updatePost = (post) => {
  const userId = post.user_id;
  return (dispatch) => {
    dispatch({type: types.LOADING_POST})
    return fetch(`${API_URL}/users/${userId}/posts/${post.id}`, {
      method: 'PATCH',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({post})
    })
      .then(response => response.json())
      .then(post => dispatch({
        type: types.SET_POST,
        post
      }))
  }
}

export const deletePost = post => {
  return (dispatch) => {
    return fetch(`${API_URL}/posts/${post.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ post })
    })
    .then(response => response.json())
    .then(posts => {dispatch({ type: types.SET_POSTS, posts})});
  }
}