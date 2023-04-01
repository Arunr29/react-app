import ExpenseItem from "./ExpenseItem";
import './ExpenseData.css';
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../FilterExpense/ExpensesFilter";
import ExpenseList from "./ExpenseList";

function ExpenseData(props) {

  const [fileredValue, updatedValue] = useState('2019');

  const filterExpense = (event) => {
    console.log("ExpenseData.js");
    updatedValue(event)
  }


  // using higher order functions to filter and map the expenses

  const filteredDate = props.items.filter(data => (data.date.getFullYear().toString()) === (fileredValue));
  console.log(filteredDate.length == 0 ? "no data" : "Data");



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter setYear={fileredValue} displayExpense={filterExpense} />
        <ExpenseList items={filteredDate} />

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date} />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date} />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date} />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date} /> */}
      </Card>
    </div>
  );
}

export default ExpenseData;
