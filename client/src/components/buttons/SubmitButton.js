import React from 'react';

const SubmitButton = ({ text }) => {
  return (
    <button
      className="BtnBasic SubmitBtn"
      type="submit"
    >
      <i className="fas fa-circle" >
        <span className="BtnText">{ text }</span>
      </i>
    </button>
  )
}

export default SubmitButton;