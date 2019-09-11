import React from "react";

const SpecialButton = (props) => {
  const {label} = props;
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      label}
    </button>
  );
};

export {SpecialButton}