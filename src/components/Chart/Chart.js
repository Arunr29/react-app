import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

function Chart(props) {

    const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...datapointValues);

    const mapChartValues = props.dataPoints.map(dataPoint => (
        <ChartBar
            key={dataPoint.month}
            value={dataPoint.value}
            maxValue={totalMax}
            month={dataPoint.month} />
    ))

    return (
        <div className="chart">
            {mapChartValues}
        </div>
    );
}

export default Chart;