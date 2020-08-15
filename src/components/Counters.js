import React from "react";
import Counter from "./Counter";
import {
  incrementCount,
  decrementCount,
  resetCount,
  removeCounter,
  getTotalCount,
} from "../actions/";
import { connect } from "react-redux";

const Counters = (props) => {
  const renderCounters = () => {
    return props.counters.map((c, index) => {
      return (
        <Counter
          key={c._id}
          index={index}
          count={c.count}
          incrementCount={props.incrementCount}
          decrementCount={props.decrementCount}
          resetCount={props.resetCount}
          removeCounter={props.removeCounter}
        />
      );
    });
  };
  return <div className="container">{renderCounters()}</div>;
};

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
  };
};

const mapDispatchToProps = () => {
  return {
    incrementCount,
    decrementCount,
    resetCount,
    removeCounter,
    getTotalCount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counters);
