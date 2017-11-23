import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div>
      <Link to='/signup'><button className="splash-signup">SIGN UP</button></Link>

      <h2>ALREADY HAVE AN ACCOUNT?</h2>

      <Link to='/login'><button className="splash-login">LOG IN</button></Link>
    </div>
  );
};
