import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm() {
    //Title - useState
    const [enteredTitle, setEnteredTitle] = useState('');
    //Amount - useState
    const [enteredAmount, setEnteredAmount] = useState('');
    //Date - useState
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        const submittedTitle = event.target.value;
        setEnteredTitle(submittedTitle)
        console.log(submittedTitle);
    }

    const amountChangeHandler = (event) => {
            const submittedAmount = event.target.value;
            setEnteredAmount(submittedAmount);
            console.log(submittedAmount);
    }

    const dateChangeHandler = (event) =>{
        const submittedDate = event.target.value;
        setEnteredDate(submittedDate);
        console.log(submittedDate);
    }

    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" placeholder="Title" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" placeholder="Amount" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Submit Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;