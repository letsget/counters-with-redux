import React from "react";
import { connect } from "react-redux";
import { newCounter } from "../actions";

function AddCounter(props) {
  return (
    <div onClick={() => props.newCounter()} className="btn btn-primary">
      Add Counter
    </div>
  );
}

export default connect(undefined, { newCounter })(AddCounter);
