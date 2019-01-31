const sendStudentEmail = (email) => {
  return new Promise((resolve,reject)=>{
    fetch(`http://localhost:3000/student/find_student`,
    {
      method:'POST',
      mode: 'cors', 
      headers: {
        "Content-Type": "application/json ",
      },
      body:JSON.stringify({ "auth": {"email":email} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .then(e=> console.log(e))
    .catch(e => console.log('ERR: ', e))
  })
}


sendStudentEmail("clara.ostudent@okboom.com")
.then(e=>e.json())
.then(e=>console.log(e))