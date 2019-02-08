import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  post: {}
}

export default function commentsReducer (state = initialState, action) {
  switch(action.type) {
    case types.FETCH_COMMENTS:
      // might not need this
      return action.comments;
    case types.SUBMIT_COMMENT:
      // push comment into post.comments collection
      // debugger
      // return {
      //   ...state,
      //   loading: true,
      //   loaded: false,
      //   comments: ????
      // }
      return {
        ...state,
        loading: false,
        loaded: true,
        post: action.post
      }
    case types.UPDATE_COMMENT:
      return action.comment
    case types.REMOVE_COMMENT:
      // remove comment by filtering post.comments collection
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state;
  }
}
