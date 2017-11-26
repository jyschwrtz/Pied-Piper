import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import BrowseContainer from '../browse/browse_container';
import PlaylistContainer from '../playlist/playlist_container';
import UserAccountContainer from '../user/user_account_container';

const MainPage = () => (
  <div className="main-page">
    <Route
      path="/browse"
      component={BrowseContainer}/>
    <Route
      path="/user/:userId/playlist/:playlistId"
      component={PlaylistContainer}/>
    <Route
      path="/setting/account"
      component={UserAccountContainer}/>
  </div>
);

export default MainPage;
