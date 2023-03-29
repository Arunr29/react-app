import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {

  let currentTitle = props.title;
  const dollar = "$";
  const [title, setTitle] = useState(currentTitle); //syntax using state

  //adding a click event introducing state
  const clickHandler = () => {
      setTitle("Updated!");
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
