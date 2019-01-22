import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
    <p>404: The page you are requesting could not be found.</p>
    <p>Who would you like to blame?</p>
    <div className="submit"><a target="_blank" href="https://twitter.com/mrbenjaminhoppe">Ben</a></div>
    <div className="submit"><a target="_blank" href="https://twitter.com/macgabbi">Gabriella</a></div>
    <div className="submit"><a target="_blank" href="https://twitter.com/Malcolm_MacLure">Malcom</a></div><br/>

    <Link to="/signup">Sign up</Link><br/>
    <Link to="/login">Log in</Link><br/>
</div>
  );
}

export default NotFound;
