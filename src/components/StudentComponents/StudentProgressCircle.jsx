import React from 'react';

const StudentProgressCircle = (props) => {

  const getProgressColor = (percent) => {
    if (percent < 60) return "#FC3404"
    if (percent >= 60 && percent < 80) return "#C5A022"
    if (percent >= 80) return "#17B57E"
  }

  return (
    <div className="studentProgressCircle">
      <svg
        id="svg"
        width="150" height="150"
        viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor:'transparent'}}>

        <circle
          r="37.75" cx="75.5" cy="75.5"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
          stroke="#404040"
          strokeWidth="10px"
        ></circle>

        <circle
        r="37.75" cx="75.5" cy="75.5"
        transform="rotate(-90 75.5 75.5)"
          fill="transparent"
          strokeDasharray={2*Math.PI*37.75}
          strokeDashoffset={2*Math.PI*37.75 - (2*Math.PI*37.75 * (props.progress() / 100))}
          stroke = {getProgressColor(props.progress())}
          strokeWidth="10px"
          ></circle>
    </svg>
    <div className="circlePercentage">{props.progress()}%</div>
  </div>
   );
}

export default StudentProgressCircle;
