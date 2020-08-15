import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import Total from "./components/Total";
import MaxCounter from "./components/MaxCounter";
import AddCounter from "./components/AddCounter";
import CountersNumber from "./components/CountersNumber";
import MasterReset from "./components/MasterReset";
import RemoveAllCounters from "./components/RemoveAllCounters";

function App() {
  return (
    <div className="container">
      <CountersNumber />
      <Total />
      <MaxCounter />
      <AddCounter />
      <MasterReset />
      <RemoveAllCounters />
      <Counters />
    </div>
  );
}

export default App;
