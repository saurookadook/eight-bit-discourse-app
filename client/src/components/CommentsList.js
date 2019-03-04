import React from 'react';

import Comment from './Comment';

const CommentsList = ({ comments, deleteComment }) => {
    if (comments) {
      const formattedComments = comments.map((comment, index) => {
        return (
          <Comment 
            key={index}
            user={comment.user}
            content={comment.content}
          />
        )
      })

      return(
        <div className="CommentsContainer">
          <h4 className="CloudBubble CommentsHeader">
            <b>Comments:</b>
          </h4>
          <div className="CloudBubble">
            {formattedComments}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

export default CommentsList;
