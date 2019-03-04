import React from 'react';

import DeleteButton from './buttons/DeleteButton';

const Comment = ({ index, comment }) =>
  <div
    className="commentDiv" 
    key={index}
  >
    <p>
      <strong>{comment.user.username}</strong>: {comment.content}
    </p>
    {/* <DeleteButton
      delete={() => deleteCommment()}
    /> */}
  </div>

export default Comment;