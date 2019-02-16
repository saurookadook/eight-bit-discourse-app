import React from 'react';

const EditButton = ({ data, onClick }) => {
  return (
    <button
      className="EditBtn"
      onClick={() => onClick(data)}
    >
      <i className="fas fa-pen-square" ></i>
    </button>
  )
}

export default EditButton;