import React, { useState, useEffect } from "react";
import "../App.css";

const Addtransaction = () => {
  const [value, setValue] = useState(0);
  const [transaction, setTransaction] = useState([]);
  const [total, setTotal] = useState(0);

  const addvalue = (e) => {
    setValue(e.target.value);
  };

  const addtransaction = (type, amt) => {
    if (amt !== 0 && amt !== "") {
      var trans = JSON.parse(localStorage.getItem("Transaction") || "[]");
      var data = {
        date: new Date().toISOString(),
        amount: amt,
        transactionType: type,
      };
      trans.push(data);
      setTransaction([data]);
      localStorage.setItem("Transaction", JSON.stringify(trans));

      var result =
        type === "Add" ? total + parseInt(value) : total - parseInt(value);

      setTotal(result);
      details();
      setValue(0);
    } else {
      alert("Please Enter valid Amount ...");
      setValue(0);
    }
  };

  function details() {
    const trans = JSON.parse(localStorage.getItem("Transaction"));
    if (trans) {
      var result = trans.reduce(function (sum, obj) {
        return sum + parseInt(obj.amount);
      }, 0);
      setTransaction(trans);
      setTotal(result);
      console.log(result);
    }
  }

  useEffect(() => {
    details();
  }, []);
  return (
    <>
      <div className="transactionwindow">
        <div>Balance : {total ? total : 0}</div>
        <div>
          <input type="number" value={value} onChange={addvalue} />
        </div>
        <div>
          <button onClick={() => addtransaction("Add", value)}>Add</button>
          <button onClick={() => addtransaction("Remove", `-${value}`)}>
            Remove
          </button>
        </div>
      </div>

      <div className="transactionwindow">
        <div className="box">
          <h4>Transactions: </h4>
          {transaction.map((el) => {
            return (
              <div key={el.date}>
                {el.date}-{el.amount < 0 ? el.amount * -1 : el.amount}-
                {el.transactionType}
              </div>
            );
          })}
        </div>
      </div>
      <div>*****</div>
    </>
  );
};

export default Addtransaction;
