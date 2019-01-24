import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';

class JobBoard extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <h1>Job Board</h1>
      <Footer/>
      </div>
    );
  }

}

export default JobBoard;
