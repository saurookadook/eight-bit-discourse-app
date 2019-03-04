import React from 'react';

import DeleteButton from './buttons/DeleteButton';

const Comment = ({ comment, currentUser, onClick }) =>
  <div className="Comment">
    <p>
      <strong>{comment.user.username}</strong>: {comment.content}
    </p>
    { currentUser.username === comment.user.username && (
      <DeleteButton
        text="Remove"
        onClick={() => onClick()}
      />
    )}
  </div>

export default Comment;