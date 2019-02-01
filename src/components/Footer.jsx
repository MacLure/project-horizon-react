import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Footers = styled.footer`
  left: 0 ; right: 0; bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #2b2e34;
  margin-top: 80px;
  text-align: center;
`
const Text = styled.p`
  display: inline-block;
  color: white;
  padding: 0px 10px;
  background-color: inherit;
  margin-top: 30px;
  transition: color 0.5s;

  :hover {
    transition: color 0.5s;
    color: #FC6404;
}`


const Footer = (props) => {

  return (
    <React.Fragment>
    <Footers>
      <Link to="./admin"><Text>Admin Dashboard</Text></Link>
      <Link to="./student"><Text>Student Dashboard</Text></Link>
      <Link to="./signup"><Text>Sign up</Text></Link>
      <Link to="./login"><Text>Log in</Text></Link>
    </Footers>
    </React.Fragment>
   );
}

export default Footer;
