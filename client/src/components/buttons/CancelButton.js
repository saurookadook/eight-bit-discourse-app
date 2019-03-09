import React from 'react';

const CancelButton =  ({ onClick }) => {
  return (
    <button
        className="BtnBasic CancelBtn"
        onClick={() => onClick()}
      >
        <p>
          <i className="fas fa-times" >
            <span className="BtnText">Cancel</span>
          </i>
        </p>
      </button>
    )
  }

export default CancelButton;