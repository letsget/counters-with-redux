import React from "react";
import { connect } from "react-redux";

function CountersNumber(props) {
  return (
    <h2>
      Number of counters:{" "}
      <span
        className={
          props.counters.length < 1
            ? "badge badge-secondary m-2"
            : "badge badge-success m-2"
        }
      >
        {props.counters.length}
      </span>
    </h2>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

export default connect(mapStateToProps)(CountersNumber);
