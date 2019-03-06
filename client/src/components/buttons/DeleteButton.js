import React from 'react';

const DeleteButton = ({ onClick, text }) => {
  return (
    <button
      className="BtnBasic DeleteBtn"
      onClick={() => onClick()}
      type="delete"
    >
      <i className="fas fa-times" >
        <span className="BtnText">{ text }</span>
      </i>
    </button>
  )
}

export default DeleteButton;