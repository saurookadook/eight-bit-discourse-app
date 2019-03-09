import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="CloudBubble PostCloud">
      <div className="PostInfo">
        <h5 className="title">{post.title}</h5>
        <p className="game"><b>Game:</b> {post.game}</p>
        <p className="author"><b>By:</b> {post.user.username}</p>
        <p className="rating"><b>Rating:</b> {post.rating} stars</p>
      </div>

      <div className="Summary">
        <p className="discussion"><b>Summary:</b> {post.discussion}</p>
      </div>
    </div>
  )
}

export default Post;
