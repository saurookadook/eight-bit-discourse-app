import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from '../actions';

// Content
import Post from './Post';
import Comment from './Comment';
import CommentForm from '../containers/CommentForm';

class PostDisplay extends Component {
  removeComment = (data) => {
    const commentData = {
      id: data.comment.id,
      content: data.comment.content,
      post_id: data.comment.post_id,
      user_id: data.auth.user.id,
    }
    // TODO: refactor above?
    // const commentData = {
    //   ...data.comment,
    //   user_id: data.auth.user_id
    // }

    this.props.deleteComment(commentData);
  }

  render() {
    const { auth, post } = this.props;

    return (
      <div className="PostDislay">
        <Post post={post} />
        <div className="CommentsContainer">
          <h6 className="CloudBubble CommentsHeader">
            <b>Comments:</b>
          </h6>
          <div className="CloudBubble">
            { post.comments.length > 0 ? post.comments.map((comment, index) => {
              return (
                <Comment
                  key={index}
                  comment={comment}
                  auth={auth}
                  onDelete={this.removeComment}
                />
              )
            }) : (
              <p>No comments yet...</p>
            )}
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
