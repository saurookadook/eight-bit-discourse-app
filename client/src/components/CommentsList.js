import React from 'react';
import '../styles/css/index.css';

{/* <div>
  <div className="container">
    <div className="row justify-content-center">
      <h4 className="CloudBubble col-4 py-2"><b>Comments:</b></h4>
    </div>
    <div className="row justify-content-center">
      <div className="CloudBubble col-6 py-3">
        {formattedComments}
      </div>
    </div>
  </div>
</div> */}

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
