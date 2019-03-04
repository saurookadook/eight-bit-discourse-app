import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

// Content
import Post from './Post';
import Comment from './Comment';
import CommentForm from '../containers/CommentForm';

class PostDisplay extends Component {
  render() {
    const { auth, post } = this.props;

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
                  key={index}
                  comment={comment}
                  currentUser={auth.user}
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
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(PostDisplay);
