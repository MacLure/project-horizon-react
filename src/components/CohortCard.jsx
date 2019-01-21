import React from 'react';

const CohortCard = (props) => {
  const {start_date, end_date, name, course_type} = props.data

  return (
    <div className="cohort_card">
      {name}<br/>
      {course_type}<br/>
      <br/>
      {start_date} - {end_date}<br/>
      <button className="submit">add student</button>
      <button className="submit">edit</button>
      <br/>
    </div>
   );
}

export default CohortCard;
