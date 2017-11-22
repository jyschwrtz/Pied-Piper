import React from 'react';
import Greeting from './greeting/greeting';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

// import SessionFormContainer from './session/session_form_container';
import BrowseContainer from './browse/browse_container';
import { AuthRoute, ProtectedRoute, AuthExactRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      <AuthRoute path="/" component={Greeting} />
    </Switch>
  </div>
);

export default App;
