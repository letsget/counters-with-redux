// ACTIONS AND TYPES
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const NEW_COUNTER = "NEW_COUNTER";
export const REMOVE_COUNTER = "REMOVE_COUNTER";
export const MASTER_RESET = "MASTER_RESET";
export const REMOVE_ALL_COUNTERS = "REMOVE_ALL_COUNTERS";
export const GET_TOTAL_COUNT = "GET_TOTAL_COUNT";

// ACTIONS CREATORS
export const incrementCount = (index) => {
  return {
    type: INCREMENT,
    payload: { index },
  };
};

export const decrementCount = (index) => {
  return {
    type: DECREMENT,
    payload: { index },
  };
};

export const resetCount = (index) => {
  return {
    type: RESET,
    payload: { index },
  };
};

export const newCounter = () => {
  return {
    type: NEW_COUNTER,
    payload: {},
  };
};

export const removeCounter = (index) => {
  return {
    type: REMOVE_COUNTER,
    payload: { index },
  };
};

export const masterReset = () => {
  return {
    type: MASTER_RESET,
    payload: {},
  };
};

export const removeAllCounters = () => {
  return {
    type: REMOVE_ALL_COUNTERS,
    payload: {},
  };
};

export const getTotalCount = (counters) => {
  return {
    type: GET_TOTAL_COUNT,
    payload: 0,
  };
};
