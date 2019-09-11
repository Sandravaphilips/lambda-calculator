import React from "react";

const Display = (props) => {
  const {data} = props
  return <div className="display">{/* Display any props data here */ data}</div>;
};

export {Display};