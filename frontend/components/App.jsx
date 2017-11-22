import React from 'react';
import Greeting from './greeting/greeting';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import BrowseContainer from './browse/browse_container';
import { AuthRoute, ProtectedRoute, AuthExactRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthExactRoute exact path="/" component={Greeting} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/browse" component={BrowseContainer} />
  </div>
);

export default App;
