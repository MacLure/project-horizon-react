import React from 'react';
import {Link} from "react-router-dom";
import CommonStyles from './../../Common.css'

const Footer = (props) => {

  return (
    <footer>
      <Link className="footerText" to="./admin">Admin Dashboard</Link>
      <Link className="footerText" to="./student">Student Dashboard</Link>
      <Link className="footerText" to="./signup">Sign up</Link>
      <Link className="footerText" to="./login">Log in</Link>
    </footer>
   );
}

export default Footer;
