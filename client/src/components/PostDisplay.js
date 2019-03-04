import React from 'react';

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

export default PostDisplay;
