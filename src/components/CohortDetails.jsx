import React from 'react';

const CohortDetails = (props) => {

  const {start_date, end_date, name, course_type} = props.cohort
  const admins = props.admins
  const students = props.students

  return (
    <div className="cohort_card">

    <p>Staff:</p>
    <ul>
    {admins.map(admin => (
      <li key={admin.id}>{admin.first_name} {admin.last_name}</li>
    ))}
    </ul>

    <button className="submit">add staff member</button> <br />

    <p>Students:</p>
    <ul>
    {students.map(student => (
      <li key={student.id}>{student.first_name} {student.last_name}</li>
    ))}
    </ul>

    <br/><button className="submit">add student</button>

    </div>
  );
}

export default CohortDetails;
