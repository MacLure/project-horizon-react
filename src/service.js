export const onLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`http://localhost:3000/admin/admin_token`,
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