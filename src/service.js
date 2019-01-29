export const onAdminLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`https://project-horizon-rails.herokuapp.com/admin/admin_token`,
    {
      method:'POST',
      mode: 'cors', 
      headers: {
        "Content-Type": "application/json ",
      },
      body:JSON.stringify({ "auth": {"email":email, "password":password, "is_admin":true} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))

  })
}

export const onStudentLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`https://project-horizon-rails.herokuapp.com/student/student_token`,
    {
      method:'POST',
      mode: 'cors', 
      headers: {
        "Content-Type": "application/json ",
      },
      body:JSON.stringify({ "auth": {"email":email, "password":password, "is_admin":false} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))

  })
}

export const getAdminDashboardData = () => {
  fetch('https://project-horizon-rails.herokuapp.com/admin',{mode:'cors'})
  .then(response=>response.json())
  .then(response=> {this.setState({
      admins: response.admins,
      cohorts: response.cohorts,
      students: response.students,
      student_notes: response.student_notes,
      assignments: response.assignments,
      submissions: response.submissions,
      submission_comments: response.submission_comments,
      company_notes: response.company_notes,
      contact_notes: response.contact_notes,
      events: response.events,
      onFocusData: response.cohorts[0]
    });
  })
}