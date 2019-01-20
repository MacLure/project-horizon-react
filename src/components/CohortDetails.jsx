import React from 'react';

const CohortDetails = (props) => {

  const {start_date, end_date, name, course_type} = props.cohort
  const admins = props.admins
  const students = props.students

  return (
    <div>
    {name} {course_type}<br />
    {start_date} - {end_date}<br />

    Staff:

    <ul>
    {admins.map(admin => (
      <li key={admin.id}>{admin.first_name} {admin.last_name}</li>
    ))}
    </ul>

    <button>add staff member</button> <br />

    Students:
    <ul>
    {students.map(student => (
      <li key={student.id}>{student.first_name} {student.last_name}</li>
    ))}
    </ul>

    <button>add student</button>
    <button>to students</button> <br />

    </div>
  );
}
 
export default CohortDetails;