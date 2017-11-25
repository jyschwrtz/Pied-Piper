import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AuthExactRoute } from '../util/route_util';

import Greeting from './greeting/greeting';
import MusicPlayerContainer from './music_player/music_player_container';


const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/browse" component={MusicPlayerContainer} />
      <ProtectedRoute path="/user" component={MusicPlayerContainer} />
      <AuthRoute path="/" component={Greeting} />
    </Switch>
  </div>
);

export default App;
