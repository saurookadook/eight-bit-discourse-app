import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

// Content
import Post from './Post';
import Comment from './Comment';
import CommentForm from '../containers/CommentForm';

const PostDisplay = ({ auth, post }) => {
  return (
    <div className="PostDislay">
      <Post post={post} />
      <div className="CommentsContainer">
        <h4 className="CloudBubble CommentsHeader">
          <b>Comments:</b>
        </h4>
        <div className="CloudBubble">
          {post.comments.map((comment, index) => {
            return (
              <Comment
                index={index}
                comment={comment}
                onClick={actions.deleteComment(comment)}
              />
            )
          })}
        </div>
        { auth.user && (
          <CommentForm
            user={auth.user}
            postId={post.id}
          />
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(PostDisplay);
