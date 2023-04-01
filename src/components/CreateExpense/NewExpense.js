import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const [isEditing, setEditing] = useState(false);

    const onShareData = (event) => {
        const newExpense = {
            ...event,
            id: Math.random().toString() //to generate a random number for id
        }
        // console.log(newExpense);
        //Function calling from App.js using prop
        props.onAddExpense(newExpense);
        // hide form after submission
        setEditing(false);

    }

    const showExpenseBtn = () => {
        setEditing(true);
    }

    const cancelBtn = () => {
        setEditing(false);
    }

    //Alternate way of displaying conditional content
    // let notEditing;
    // let editing;

    // if (!isEditing) {
    //     notEditing = <button onClick={showExpenseBtn} type="button">Add Expense</button>;
    // } else if (isEditing) {
    //     editing = <ExpenseForm onCreateExpense={onShareData} />;
    // }

    return (<div className="new-expense">
        {!isEditing ? <button onClick={showExpenseBtn} type="button">Add Expense</button> : ''}
        {isEditing ? <ExpenseForm onCreateExpense={onShareData} onCancel={cancelBtn} /> : ''}
    </div>);
}

export default NewExpense;