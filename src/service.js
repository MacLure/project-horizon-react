export const onLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch(`https://project-horizon-rails.herokuapp.com/admin/admin_token`,
    {
      method:'POST',
      mode: 'cors',
      headers: {
        "Accept":"application/json",
       },
      body:JSON.stringify({ "auth": {"email":email, "password":password} })
    })
    .then(e=>e.ok?resolve(e):reject(e))
    .catch(e => console.log('ERR: ', e))

  })
}