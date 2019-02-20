import React from 'react';

const CommentsList = ({ comments }) => {
    if (comments) {
      const formattedComments = comments.map((comment, index) => {
        return (
          <div className="commentDiv" key={index}>
            <p><strong>{comment.user.username}</strong>: {comment.content}</p>
          </div>
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
