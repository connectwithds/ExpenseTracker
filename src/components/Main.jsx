import React from "react";
import "../App.css";
import Addtransaction from "./Addtransaction";

const Main = () => {
  return (
    <>
      <div className="outerbox">
        <h1>Expense Tracker-Basic</h1>
        <Addtransaction />
      </div>
    </>
  );
};

export default Main;
