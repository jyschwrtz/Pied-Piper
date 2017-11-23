import React from 'react';
import {
  Link,
  Switch,
  Redirect
 } from 'react-router-dom';
import Logo from '../logo/logo';
import {
  AuthRoute,
  AuthExactRoute,
  ProtectedRoute
} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import GreetingButtons from './greeting_buttons';

export default (props) => {
  let routes;
  if (props.match.isExact) {
    routes = <AuthRoute path='/' component={GreetingButtons}/>;
  } else {
    routes = <Redirect to='/' />;
  }

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-left">
          <Logo color="white"/>
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            {routes}
          </Switch>
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
