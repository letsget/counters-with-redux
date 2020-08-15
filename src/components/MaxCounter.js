import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { getMaxCount } from "../services/CounterService";

const MaxCounter = (props) => {
  const maxCount = getMaxCount(props.counters);

  const badgeClasses = classNames("badge m-2", {
    "badge-secondary": maxCount < 1,
    "badge-success": maxCount > 0,
  });

  return (
    <h2>
      Max Counter:
      <span className={badgeClasses}>{maxCount}</span>
    </h2>
  );
};

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

export default connect(mapStateToProps)(MaxCounter);
