import React from 'react';

const CohortProgressCircle = (props) => {
  return (
    <div>
      <svg
        id="svg"
        width="100" height="100"
        viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor:'inherit'}}>

        <circle
          r="25" cx="50" cy="50"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
          stroke="#404040"
          strokeWidth="10px"
        ></circle>

        <circle
          r="25" cx="50" cy="50"
          transform="rotate(-90 50 50)"
          fill="transparent"
          strokeDasharray={2*Math.PI*25}
          strokeDashoffset={2*Math.PI*25 - (2*Math.PI*25 * (props.progress() / 100))}
          stroke= '#2C65F9'
          strokeWidth="10px"
          ></circle>
    </svg>
  </div>
   );
}

export default CohortProgressCircle;
