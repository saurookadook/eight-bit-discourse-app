import React from 'react';

const CancelButton =  ({ onClick }) => {
  return (
    <button
        className="CancelBtn"
        onClick={() => onClick()}
      >
        <i className="fas fa-times" />
      </button>
    )
  }

export default CancelButton;