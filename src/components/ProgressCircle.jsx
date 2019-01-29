import React from 'react';

const ProgressCircle = (props) => {
  return ( 
    <div style={{display: 'inline-block'}}>
      <svg id="svg" width="100" height="100" style={{backgroundColor: 'rgba(42, 44, 51, 1)'}} viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="25" cx="50" cy="50" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" stroke="#fff" strokeWidth="30px"></circle>
        <circle r="25" cx="50" cy="50" fill="transparent" stroke-dasharray={2*Math.PI*25} stroke-dashoffset={2*Math.PI*25 - (2*Math.PI*25 * (props.progress() / 100))} stroke= '#DD3D0F' strokeWidth="30px"></circle>
    </svg>
  </div>
   );
}
 
export default ProgressCircle;