import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
    const chartDataPoints = [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
        { month: "Apr", value: 0 },
        { month: "May", value: 0 },
        { month: "Jun", value: 0 },
        { month: "Jul", value: 0 },
        { month: "Aug", value: 0 },
        { month: "Sep", value: 0 },
        { month: "Oct", value: 0 },
        { month: "Nov", value: 0 },
        { month: "Dec", value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0 => jan =>0
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return (<Chart dataPoints={chartDataPoints}/>);
}

export default ExpenseChart;
