import React from 'react';

const SubmitButton = ({ text }) => {
  return (
    <button
      className="BtnBasic SubmitBtn"
      type="submit"
    >
      <p>
        <i className="fas fa-circle" >
          <span className="BtnText">{ text }</span>
        </i>
      </p>
    </button>
  )
}

export default SubmitButton;