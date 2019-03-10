import React from 'react';

const EditButton = ({ data, onClick }) => {
  return (
    <button
      className="BtnBasic EditBtn"
      onClick={() => onClick(data)}
    >
      <p>
        <i className="fas fa-pen-square">
          <span className="BtnText">Edit</span>
        </i>
      </p>
    </button>
  )
}

export default EditButton;