import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends Component {

  render() {
    const { post} = this.props;

    return (
      <div className="CloudBubble">
        <Link
          className="text-dark"
          to={`/posts/${post.id}`}
        >
          <h3>{post.title}</h3>
        </Link>
        <div>
          <p>
            <strong>Author:</strong> {post.author.username}
            <span className="Separator">||</span>
            <strong>Game of discussion:</strong> {post.game} 
          </p>
        </div>
      </div>
    )
  }
}

export default PostListItem;