import React from 'react';

const EditButton = ({ data, onClick }) => {
  return (
    <button
      className="EditBtn"
      onClick={() => onClick(data)}
    >
      Edit Info
    </button>
  )
}

export default EditButton;