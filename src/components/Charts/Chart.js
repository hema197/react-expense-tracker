import './Chart.css'
import ChartBar from './ChartBar';

function Chart(props){
    const valueDataPoints = props.dataPoints.map( dataPoint => dataPoint.value)
    const maxValue = Math.max(...valueDataPoints);
  return (
      <div className="chart">
          {props.dataPoints.map( dataPoint => (
              <ChartBar
              value= {dataPoint.value}
              label= {dataPoint.label}
              max = {maxValue}
              key={dataPoint.label}
             />
          ))}
      </div>
  )
}

export default Chart;