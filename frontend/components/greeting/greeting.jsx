import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';

export default (props) => {
  let content;
  if (props.match.isExact) {
    content = (
      <div>
        <Link to='/signup'><button className="splash-signup">SIGN UP</button></Link>

        <h2>ALREADY HAVE AN ACCOUNT?</h2>

        <Link to='/login'><button className="splash-login">LOG IN</button></Link>
      </div>
    );
  }
  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-left">
          <Logo color="white"/>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />

          {content}

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
