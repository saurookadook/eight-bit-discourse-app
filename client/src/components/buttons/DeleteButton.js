import React from 'react';

const DeleteButton = ({ onClick, text }) => {
  return (
    <button
      className="BtnBasic DeleteBtn"
      onClick={() => onClick()}
      type="delete"
    >
      <p>
        <i className="fas fa-times" />
        <span className="BtnText">{ text }</span>
      </p>
    </button>
  )
}

export default DeleteButton;