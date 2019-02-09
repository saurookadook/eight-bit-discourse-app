import React from 'react';
import Post from './Post';
import CommentsList from './CommentsList';
import CommentForm from '../containers/CommentForm';
import '../styles/css/index.css'

const PostDisplay = ({ props }) => {
  let postId = parseInt(props.match.params.id);
  
  return (
    <div className="PostDislay">
      <Post post={props.post.post} />
      <div className="comments">
        <CommentsList comments={props.post.comments} />
        <CommentForm postId={postId} />
      </div>
    </div>
  )
}

export default PostDisplay;
