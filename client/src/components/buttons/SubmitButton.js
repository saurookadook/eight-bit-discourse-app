import React from 'react';

const SubmitButton = () => {
  return (
    <button
      className="BtnBasic SubmitBtn"
      type="submit"
    >
      <i className="fas fa-circle" >
        <span className="BtnText">Submit</span>
      </i>
    </button>
  )
}

export default SubmitButton;