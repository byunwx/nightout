import React from "react";

const Btn = props => (
  <button {...props} className="btn btn-floating">
    {props.children}
  </button>
);

export default Btn;