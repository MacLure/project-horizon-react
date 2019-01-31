import {reducer} from './reducers/adminAuthenticationReducer'

const localURL = "http://localhost:3000"
const serverURL = "https://project-horizon-rails.herokuapp.com"

const rootURL = serverURL

export const onAdminLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`${rootURL}/admin/admin_token?${JSON.stringify({ "auth": {"email":email, "password":password}})}`,
    {
      method:'POST',
      mode: 'cors', 
      headers: {
        "Content-Type": "application/json ",
      },
      body:JSON.stringify({ "auth": {"email":email, "password":password} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

export const onStudentLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`${rootURL}/student/student_token`,
    {
      method:'POST',
      mode: 'cors', 
      headers: {
        "Content-Type": "application/json ",
      },
      body:JSON.stringify({ "auth": {"email":email, "password":password, "is_admin":false} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .then(e=> console.log(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// export const sendStudentEmail = (email) => {
//   return new Promise((resolve,reject)=>{
//     fetch(`https://project-horizon-rails.herokuapp.com/student/find_student`,
//     {
//       method:'POST',
//       mode: 'cors', 
//       headers: {
//         "Content-Type": "application/json ",
//       },
//       body:JSON.stringify({ "auth": {"email":email} })
//     })
//     .then(e=>e.ok?resolve(e):reject(e))
//     .then(e=> console.log(e))
//     .catch(e => console.log('ERR: ', e))
//   })
// }

export const getAdminDashboardData = (token) => {
  return new Promise((resolve,reject)=>{
  fetch(`${rootURL}/admin?token=${token}`,{mode:'cors'})
  .then(e=>e.ok?resolve(e):reject(e))
  .catch(e => console.log('ERR: ', e))
  })
}

export const getStudentDashboardData = (token) => {
  return new Promise((resolve,reject)=>{
  fetch(`${rootURL}/student?token=${token}`,{mode:'cors'})
  .then(e=>e.ok?resolve(e):reject(e))
  .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewCohort = (data, token) => {
  return new Promise((resolve, reject) => {
    // fetch(`https://project-horizon-rails.herokuapp.com/admin/cohorts?cohort=${JSON.stringify(data, token)}`, {
      fetch(`${rootURL}/admin/cohorts?cohort=${data}&token=${token}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const deleteCohort = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/cohorts/${cohort_id}?${JSON.stringify({'cohhort_id': cohort_id, "is_admin":true, "token":token})}`, {
      method: 'delete',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewAssignment = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/assignemnts?assignment=${JSON.stringify(data, token)}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const deleteAssignment = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/assignments?assignment=${JSON.stringify(cohort_id, token)}`, {
      method: 'delete',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewEvent = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/events?event=${JSON.stringify({'is_admin': true, data, token})}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const deleteEvent = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/events?event=${JSON.stringify(cohort_id, token)}`, {
      method: 'delete',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewSibmission = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student/submissions?submission=${JSON.stringify(data, token)}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createStudentNote = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/student-note?note=${JSON.stringify(data, token)}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const deleteStudentnote = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/student-note?note=${JSON.stringify(cohort_id, token)}`, {
      method: 'delete',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewSubmission = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student/submission?submission=${JSON.stringify(data, token)}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const createNewSubmissionComment = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student/submission-comment?comment=${JSON.stringify(data, token)}`, {
      method: 'post',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}

// doesn't work
export const deleteSumissionComment = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/submission-comment?comment=${JSON.stringify(cohort_id, token)}`, {
      method: 'delete',
      mode: "cors"})
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))
  })
}