import React from 'react';
import {Link} from "react-router-dom";
import CommonStyles from './../../Common.css'

const Footer = (props) => {
  return (
    <footer>
      <ul className="createdBy">
        <li>Created by:</li>
        <li><a target="_blank" href="http://malcolmmaclure.com/">Malcolm MacLure</a></li>
        <li><a target="_blank" href="https://github.com/gabaza">Gabrella Cuello</a></li>
        <li><a target="_blank" href="https://benjaminhoppe.co/">Benjamin Hoppe</a></li>
      </ul>

      <div className="copyright">
        <p>&copy; Horizon 2019</p>
      </div>

      <ul className="footerStuff">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Legal Stuff</a></li>
      </ul>
    </footer>
   );
}

export default Footer;
