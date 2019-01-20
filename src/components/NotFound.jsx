import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div>
    <p>404: The page you are requesting could not be found.</p>
    <Link to="/signup">Sign up</Link><br/>
    <Link to="/login">Log in</Link><br/>
</div>
  );
}
 
export default NotFound;