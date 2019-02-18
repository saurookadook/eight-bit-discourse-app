import React from 'react';
import Post from './Post';
import CommentsList from './CommentsList';
import CommentForm from '../containers/CommentForm';
import '../styles/css/index.css'

const PostDisplay = ({ auth, post }) => {
  return (
    <div className="PostDislay">
      <Post post={post} />
      <div className="comments">
        <CommentsList
          comments={post.comments}
        />
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
