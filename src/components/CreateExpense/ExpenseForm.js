import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    //Title - useState
    const [enteredTitle, setEnteredTitle] = useState('');
    //Amount - useState
    const [enteredAmount, setEnteredAmount] = useState('');
    //Date - useState
    const [enteredDate, setEnteredDate] = useState('');

    //Atlernate way to avoid using multiple state
    // const [userInput, updateInput] = useState({
    //     enteredTitle: '', enteredAmount: '', enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        const submittedTitle = event.target.value;
        setEnteredTitle(submittedTitle)
        console.log(submittedTitle);
        // updateInput({
        //     ...userInput,
        //     enteredTitle: submittedTitle
        // })
        // updateInput((prevState) => { 
        //   return {...prevState,enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        const submittedAmount = event.target.value;
        setEnteredAmount(submittedAmount);
        console.log(submittedAmount);
        // updateInput({
        //     ...userInput,
        //     enteredAmount: submittedAmount
        // })
    }

    const dateChangeHandler = (event) => {
        const submittedDate = event.target.value;
        setEnteredDate(submittedDate);
        console.log(submittedDate);
        // updateInput({
        //     ...userInput,
        //     enteredDate: submittedDate
        // })
    }

    const submitForm = (event) => {
        event.preventDefault();
            
        const expenseForm = {
            title: enteredTitle,
            amount: `${enteredAmount}${'$'}`,
            date: new Date(enteredDate)
        }
         //Function calling from NewExpense.js using prop
        const createdExpense = props.onCreateExpense(expenseForm);
        // console.log(createdExpense);
        //Clear the forms via reset
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (<form onSubmit={submitForm}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" placeholder="Title" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" placeholder="Amount" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Submit Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;