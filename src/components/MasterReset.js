import React from "react";
import { connect } from "react-redux";
import { masterReset } from "../actions";
import { getTotalCount } from "../services/CounterService";

function MasterReset(props) {
  const totalCount = getTotalCount(props.counters);

  if (props.counters.length > 0) {
    return (
      <button
        onClick={() => props.masterReset()}
        className="btn btn-danger m-2"
        disabled={totalCount < 1}
      >
        Reset All
      </button>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

export default connect(mapStateToProps, { masterReset })(MasterReset);
