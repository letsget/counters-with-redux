import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { getTotalCount } from "../services/CounterService";

const Total = (props) => {
  const totalCount = getTotalCount(props.counters);

  const badgeClasses = classNames("badge m-2", {
    "badge-secondary": totalCount < 1,
    "badge-success": totalCount > 0,
  });

  return (
    <h2>
      Total Count:
      <span className={badgeClasses}>{totalCount}</span>
    </h2>
  );
};

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

export default connect(mapStateToProps)(Total);
