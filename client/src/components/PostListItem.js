import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Static/Stateless
import DeleteButton from './buttons/DeleteButton';

class PostListItem extends Component {

  render() {
    const { post, user, onDelete } = this.props;

    return (
      <div className="CloudBubble">
        <Link
          className="BubbleLink"
          to={`/posts/${post.id}`}
        >
          <h5>{post.title}</h5>
        </Link>
        <div>
          <p>
            <strong>Author:</strong> { post.user.username }
            <span className="Separator">||</span>
            <strong>Game of discussion:</strong> { post.game }
            { (user && post.user.username === user.username) &&
              <React.Fragment>
                <span className="Separator">||</span>
                <DeleteButton
                  text="Delete"
                  onClick={() => onDelete({ post, user })}
                />
              </React.Fragment>
            }
          </p>
        </div>
      </div>
    )
  }
}

export default PostListItem;

// { user ? post.user.username === user.username && (
//   <React.Fragment>
//     <span className="Separator">||</span>
//     <DeleteButton
//       text="Delete"
//       onClick={() => onDelete({ post, user })}
//     />
//   </React.Fragment>
// ) : ('')}