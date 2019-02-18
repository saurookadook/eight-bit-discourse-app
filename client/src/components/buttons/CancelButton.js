import React from 'react';

const CancelButton =  ({ onClick }) => {
  return (
    <button
        className="BtnBasic CancelBtn"
        onClick={() => onClick()}
      >
        <i className="fas fa-times" >
          <span className="BtnText">Cancel</span>
        </i>
      </button>
    )
  }

export default CancelButton;