import React from 'react';

const EditButton = ({ data, onClick }) => {
  return (
    <button
      className="BtnBasic EditBtn"
      onClick={() => onClick(data)}
    >
      <i className="fas fa-pen-square" >
        <span className="BtnText">Edit</span>
      </i>
    </button>
  )
}

export default EditButton;