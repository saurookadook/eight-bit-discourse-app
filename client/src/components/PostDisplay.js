import React from 'react';

// Content
import Post from './Post';
import Comment from './Comment';
// import CommentsList from './CommentsList';
import CommentForm from '../containers/CommentForm';

const PostDisplay = ({ auth, post }) => {
  return (
    <div className="PostDislay">
      <Post post={post} />
      <div className="Comments">
        <div className="CommentsContainer">
          <h4 className="CloudBubble CommentsHeader">
            <b>Comments:</b>
          </h4>
          <div className="CloudBubble">
            {post.comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  user={comment.user}
                  content={comment.content}
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
    </div>
  )
}

export default PostDisplay;
