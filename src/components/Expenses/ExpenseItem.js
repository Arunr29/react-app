import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  //Hard-coded variables
  // const expenseDate = new Date(2023, 2, 27);
  // const expenseDescription = "Car Insuarance";
  // const expensePrice = 294.67;
  const dollar = "$";
  let title = props.title;

  const clickHandler = ()=>{
    title = "Updated!";
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          {props.amount}
          {dollar}
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
