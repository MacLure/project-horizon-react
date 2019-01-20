import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import StudentDashboard from './StudentDashboard'
import Login from './Login'
import Signup from './Signup'
import NotFound from './NotFound'


const Router = () => {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={ Signup } />
        <Route path='/login' exact component={ Login } />
        <Route path='/admin' component={ AdminDashboard } />
        <Route path='/student' component={ StudentDashboard } />

        <Route component={ NotFound } />


      </Switch>
    </BrowserRouter>
   );
}
 
export default Router;