import React from 'react';

const CancelButton =  ({ onClick }) => {
  return (
    <button
        className="CancelBtn"
        onClick={() => onClick()}
      >
        Cancel
      </button>
    )
  }

export default CancelButton;