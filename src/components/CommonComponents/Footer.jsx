import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul className="createdBy">
        <li>Created by:</li>
        <li>
          <a target="_blank" href="http://malcolmmaclure.com/">
            Malcolm MacLure
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/gabaza">
            Gabriela Cuello
          </a>
        </li>
        <li>
          <a target="_blank" href="https://benjaminhoppe.co/">
            Benjamin Hoppe
          </a>
        </li>
      </ul>

      <ul className="footerStuff">
        <li>&copy; Horizon 2019</li>
      </ul>
    </footer>
  );
};

export default Footer;
