import React from 'react';

const UpdateButton = ({ data, onClick }) => {
  return (
    <button
      className="UpdateBtn"
      onClick={() => onClick(data)}
    >
      Update Info
    </button>
  )
}

export default UpdateButton;