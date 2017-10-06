// Import dependencies
import React from "react";

const Col = props => {
  // Const for created dynamic column size according to Bootstrap classes
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
};

export default Col;
