import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTextHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const expenseData = {
    title: enteredTitle,
    amount: parseFloat(enteredAmount),
    date: new Date(enteredDate)
  }
  const SubmitDataHandler = (event) => {
    event.preventDefault();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveData(expenseData)
  };

  
  return (
      <form onSubmit={SubmitDataHandler}>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label>Title</label>
                  <input
                      type="text"
                      value={enteredTitle}
                      onChange={enteredTextHandler}
                  />
              </div>
              <div className="new-expense__control">
                  <label>Amount</label>
                  <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={enteredAmount}
                      onChange={enteredAmountHandler}
                  />
              </div>
              <div className="new-expense__control">
                  <label>Date</label>
                  <input
                      type="date"
                      value={enteredDate}
                      onChange={enteredDateHandler}
                  />
              </div>
          </div>
          <div className="new-expense__actions">
              <button type="button" onClick={props.onCancel}>
                  Cancel
              </button>
              <button type="submit">Add Expense</button>
          </div>
      </form>
  );
};

export default ExpenseForm;
