import React from 'react';
import {Link} from "react-router-dom";

const Footer = (props) => {

  return (
    <div>
    <footer>
      <Link to="./admin">Admin Dashboard</Link>
      <Link to="./student">Student Dashboard</Link>
      <Link to="./signup">Sign up</Link>
      <Link to="./login">Log in</Link>
    </footer>
    </div>
   );
}

export default Footer;
