import React from "react";
import { connect } from "react-redux";
import { removeAllCounters } from "../actions";

const RemoveAllCounters = (props) => {
  if (props.counters.length > 0) {
    return (
      <button
        onClick={() => props.removeAllCounters()}
        className="btn btn-danger m-2"
      >
        DELETE ALL
      </button>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

export default connect(mapStateToProps, { removeAllCounters })(
  RemoveAllCounters
);
