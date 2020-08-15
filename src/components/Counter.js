import React from "react";

const Counter = ({
  count,
  incrementCount,
  decrementCount,
  resetCount,
  removeCounter,
  index,
}) => {
  return (
    <div className="counter">
      <div
        onClick={() => incrementCount(index)}
        className="btn btn-primary m-2"
      >
        <i className="fas fa-plus" />
      </div>
      <button
        onClick={() => decrementCount(index)}
        disabled={count < 1}
        className="btn btn-primary m-2"
      >
        <i className="fas fa-minus" />
      </button>
      <button
        onClick={() => resetCount(index)}
        disabled={count < 1}
        className="btn btn-danger m-2"
      >
        reset
      </button>
      <div onClick={() => removeCounter(index)}>
        <i className="fas fa-trash" />
      </div>
      <span
        className={
          count < 1 ? "badge badge-secondary m-2" : "badge badge-success m-2"
        }
      >
        {count}
      </span>
    </div>
  );
};

export default Counter;
