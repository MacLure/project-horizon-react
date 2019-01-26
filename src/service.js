export const onLogin = (email,password) => {
  return new Promise((resolve,reject)=>{
    fetch('https://project-horizon-rails.herokuapp.com/admin/admin_token',{
      method:'POST',
      body:{ email,
        password
      },
      mode: 'cors'
    })
    .then(e=>e.ok?resolve(e):reject(e))
  })
}