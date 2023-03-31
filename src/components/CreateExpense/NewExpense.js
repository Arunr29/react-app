import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const onShareData = (event) => {
        const newExpense = {
            ...event,
            id: Math.random().toString() //to generate a random number for id
        }
        // console.log(newExpense);
        //Function calling from App.js using prop
        props.onAddExpense(newExpense);

    }
    return (<div className="new-expense">
        <ExpenseForm onCreateExpense={onShareData} />
    </div>);
}

export default NewExpense;