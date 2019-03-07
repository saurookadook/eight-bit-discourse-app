import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DeleteButton from './buttons/DeleteButton';

class PostListItem extends Component {

  render() {
    const { post, user, onDelete } = this.props;
    // debugger

    return (
      <div className="CloudBubble">
        <Link
          className="BubbleLink"
          to={`/posts/${post.id}`}
        >
          <h3>{post.title}</h3>
        </Link>
        <div>
          <strong>Author:</strong> {post.user.username}
          <span className="Separator">||</span>
          <strong>Game of discussion:</strong> {post.game}
          { user ? post.user.username === user.username && (
            <React.Fragment>
              <span className="Separator">||</span>
              <DeleteButton
                text="Delete"
                onClick={() => onDelete({ post, user })}
              />
            </React.Fragment>
          ) : ('halp')}
        </div>
      </div>
    )
  }
}

export default PostListItem;