import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DeleteButton from './buttons/DeleteButton';

class PostListItem extends Component {

  render() {
    const { post, user, onDelete } = this.props;

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
            <strong>Author:</strong> {post.user.username}
            <span className="Separator">||</span>
            <strong>Game of discussion:</strong> {post.game}
            { post.user.username === user.username && (
              <DeleteButton
                text="Delete"
                onClick={() => onDelete({ post, user })}
              />
            )}
          </p>
        </div>
      </div>
    )
  }
}

export default PostListItem;