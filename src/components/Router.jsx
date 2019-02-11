import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminComponents/AdminDashboard';
import StudentDashboard from './StudentComponents/StudentDashboard';
import Login from './CommonComponents/Login';
import Signup from './CommonComponents/Signup';
import NotFound from './CommonComponents/NotFound';
import Contacts from './AdminComponents/Contacts';
import Settings from './CommonComponents/Settings';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component={ Login } />
        <Route path='/signup' exact component={ Signup } />
        <Route path='/login' exact component={ Login } />
        <Route path='/admin' component={ AdminDashboard } />
        <Route path='/student' component={ StudentDashboard } />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/settings" component={ Settings } />

        <Route component={ NotFound } />


      </Switch>
    </BrowserRouter>
   );
}

export default Router;
