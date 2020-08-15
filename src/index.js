import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

const store = createStore(reducers);
store.dispatch({ type: "MASTER_RESET" });
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
