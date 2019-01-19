import React from 'react';
import {Link} from "react-router-dom";


const NotFound = () => {
  return (
    <div>
    <p>404: The page you are requesting could not be found.</p>
    <Link to="/">Signup / Login</Link>
    </div>
  );
}
 
export default NotFound;