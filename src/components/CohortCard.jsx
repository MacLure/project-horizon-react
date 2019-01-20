import React from 'react';

const CohortCard = (props) => {
  const {start_date, end_date, name, course_type} = props.data

  return ( 
    <div>
      {name} {course_type}<br />
      {start_date} - {end_date}<br />
      <button>edit</button> <button>add student</button>
      <br /><br />
    </div>
   );
}
 
export default CohortCard;