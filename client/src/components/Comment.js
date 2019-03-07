import React from 'react';

import DeleteButton from './buttons/DeleteButton';

const Comment = ({ auth, comment, onDelete }) =>
  <div className="Comment">
    <p>
      <strong>{comment.user.username}</strong>: {comment.content}
    </p>
    { auth.user.username === comment.user.username && (
      <DeleteButton
        text="Remove"
        onClick={() => onDelete({ auth, comment })}
      />
    )}
  </div>

export default Comment;