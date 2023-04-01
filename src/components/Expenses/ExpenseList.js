import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
    let expenseContent = <h2 className="expenses-list__fallback">Found no expenses</h2>

    if (props.items.length === 0) {
        return expenseContent;
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expense =>
            (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />))}
        </ul>
    );
};

export default ExpenseList;