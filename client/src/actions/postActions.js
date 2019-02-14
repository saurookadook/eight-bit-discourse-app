import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
import { API_URL } from '../constants/apiUrl';

// const setPosts = (posts) => ({
//   type: types.SET_POSTS,
//   payload: {
//     posts
//   }
// })

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: types.LOADING_POSTS });

    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(posts => dispatch({ type: types.FETCH_POSTS, posts })
      );
  }
}

export const fetchPost = (post) => {
  // TODO once nested functionality is setup
  // if (userId != null || undefined) {
  //   return (dispatch) => {
  //     dispatch({ type: 'LOADING_USER_POST' });
  //     return fetch(`http://localhost:3001/users/${userId}/posts/${postId}`)
  //       .then(response => reponse.json())
  //       .then(post => dispatch({ type: 'FETCH_USER_POST', post: post }));
  //   }
  // } else {
    return (dispatch) => {
      dispatch({ type: types.LOADING_POST });
      return fetch(`${API_URL}/posts/${post.postId}`)
        .then(response => response.json())
        .then(post => {dispatch({ 
          type: types.FETCH_POST, 
          post })});
    }
  }

export const submitPost = (formContent) => {
  return (dispatch) => {
    dispatch({ type: types.SUBMITTING_POST })
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: formContent})
    })
      .then(response => response.json())
      .then(posts => dispatch({ 
        type: types.UPDATE_POSTS, 
        posts }));
  }
}

export const updatePost = (post) => {
  const userId = post.user_id;
  return (dispatch) => {
    dispatch({type: types.UPDATING_POST})
    return fetch(`${API_URL}/users/${userId}/posts/${post.id}`, {
      method: 'PATCH',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post})
    })
      .then(response => {
    
        return response.json()
      })
      .then(post => dispatch({
        type: types.UPDATE_POST,
        post
      }))
  }
}