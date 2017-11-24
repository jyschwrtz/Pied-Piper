import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AuthExactRoute } from '../util/route_util';

import Greeting from './greeting/greeting';
import MusicPlayer from './music_player/music_player';


const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/browse" component={MusicPlayer} />
      <AuthRoute path="/" component={Greeting} />
    </Switch>
  </div>
);

export default App;
