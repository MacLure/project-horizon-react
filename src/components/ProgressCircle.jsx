import React from 'react';

const ProgressCircle = (props) => {
  return (
    <div>
      <svg
        id="svg"
        width="100" height="100"
        viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
        style={{backgroundColor:'rgba(42, 44, 51, 1)', height:'100%'}}>

        <circle
          r="25" cx="50" cy="50"
          fill="transparent"
          stroke-dasharray="565.48"
          stroke-dashoffset="0"
          stroke="#404040"
          strokeWidth="5px"
        ></circle>

        <circle
          r="25" cx="50" cy="50"
          transform="rotate(-90 50 50)"
          fill="transparent"
          stroke-dasharray={2*Math.PI*25}
          stroke-dashoffset={2*Math.PI*25 - (2*Math.PI*25 * (props.progress() / 100))}
          stroke= '#17B57E'
          strokeWidth="5px"
        ></circle>

    </svg>
  </div>
   );
}

export default ProgressCircle;
