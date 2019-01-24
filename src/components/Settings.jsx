import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';

class Settings extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <h1>Settings</h1>
      <Footer/>
      </div>
    );
  }

}

export default Settings;
