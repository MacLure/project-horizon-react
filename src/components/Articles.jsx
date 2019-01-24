import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';

class Articles extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <h1>Articles</h1>
      <Footer/>
      </div>
    );
  }

}

export default Articles;
