import React from 'react';

// Content
import Post from './Post';
import Comment from './Comment';
import CommentsList from './CommentsList';
import CommentForm from '../containers/CommentForm';

const PostDisplay = ({ auth, post }) => {
  return (
    <div className="PostDislay">
      <Post post={post} />
      <div className="Comments">
        {post.comments.map((comment) => {
          <Comment
            key={comment.id}
            user={comment.user.username}
            content={comment.content}
          />
        })}
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
