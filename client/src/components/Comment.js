import React from 'react';

import DeleteButton from './buttons/DeleteButton';

const Comment = ({ key, user, content }) =>
  <div className="commentDiv" key={key}>
    <p><strong>{user.username}</strong>: {content}</p>
    {/* <DeleteButton
      delete={() => deleteCommment()}
    /> */}
  </div>

export default Comment;