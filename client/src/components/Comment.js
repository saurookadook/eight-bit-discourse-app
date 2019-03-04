import React from 'react';

import DeleteButton from './buttons/DeleteButton';

const Comment = ({ index, comment, onClick }) =>
  <div
    className="commentDiv" 
    key={index}
  >
    <p>
      <strong>{comment.user.username}</strong>: {comment.content}
    </p>
    <DeleteButton
      onClick={() => onClick()}
    />
  </div>

export default Comment;