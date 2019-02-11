import React from 'react';

const EditButton = ({ dataIndex, dataName, onClick }) => {
  return (
    <button
      className="EditBtn"
      onClick={() => onClick(dataIndex)}
      title={ dataName ? `Edit ${dataName}` : `Edit` }
    >
      Edit: { dataName }
    </button>
  )
}

export default EditButton;