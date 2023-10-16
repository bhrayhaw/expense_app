import ChartBar from "./CharBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    console.log(dataPointValue);
    const totalMaxValue = Math.max(...dataPointValue);
    console.log(totalMaxValue);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    dataValue={dataPoint.value}
                    maxValue={totalMaxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
