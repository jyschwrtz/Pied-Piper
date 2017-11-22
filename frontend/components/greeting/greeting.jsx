import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

export default () => {

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-left">
          <Logo color="white"/>

          <Link to='/signup'><button className="splash-signup">SIGN UP</button></Link>

          <h2>ALREADY HAVE AN ACCOUNT?</h2>

          <Link to='/login'><button className="splash-login">LOG IN</button></Link>

        </div>
        <div className="splash-right">
          <h1>Get the right music,</h1>
          <h1>right now</h1>
          <h3>Listen to millions of songs for free.</h3>
          <ul>
            <li>Search & discover music you'll love</li>
            <li>Create playlists of your favorite music</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
