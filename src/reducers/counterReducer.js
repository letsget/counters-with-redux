import {
  INCREMENT,
  DECREMENT,
  RESET,
  NEW_COUNTER,
  REMOVE_COUNTER,
  MASTER_RESET,
  REMOVE_ALL_COUNTERS,
  GET_TOTAL_COUNT,
} from "../actions";
const shortid = require("shortid");
const initialState = [];

const store = [
  {
    _id: shortid.generate(),
    count: 0,
  },
  {
    _id: shortid.generate(),
    count: 5,
  },
  {
    _id: shortid.generate(),
    count: 10,
  },
];

const counterReducer = (state = store, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((c, i) => {
        if (action.payload.index === i) {
          c.count += 1;
        }
        return c;
      });
    case DECREMENT:
      return state.map((c, i) => {
        if (action.payload.index === i) {
          c.count === 0 ? (c.count = 0) : (c.count -= 1);
        }
        return c;
      });
    case RESET:
      return state.map((c, i) => {
        if (action.payload.index === i) {
          c.count = 0;
        }
        return c;
      });
    case REMOVE_COUNTER:
      return state.filter((el, idx) => idx !== action.payload.index);
    case MASTER_RESET:
      return state.map((c) => {
        return { ...c, count: 0 };
      });
    case NEW_COUNTER:
      return [...state, { _id: shortid.generate(), count: 0 }];
    case REMOVE_ALL_COUNTERS:
      return (state = initialState);
    case GET_TOTAL_COUNT:
      return action.payload.counters.reduce((a, e) => a + e.count, 0);
    default:
      return state;
  }
};

export default counterReducer;
