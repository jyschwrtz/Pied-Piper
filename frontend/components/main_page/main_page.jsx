import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import BrowseContainer from '../browse/browse_container';
import PlaylistContainer from '../playlist/playlist_container';
import CollectionContainer from '../collection/collection_container';
import UserAccountContainer from '../user/user_account_container';

class MainPage extends React.Component {

  render() {
    return(
      <div className="main-page">
        <Route
          path="/browse"
          component={BrowseContainer}/>
        <Route
          path="/user/:userId/playlist/:playlistId"
          component={PlaylistContainer}/>
        <Route
          path="/collection"
          component={CollectionContainer}/>
        <Route
          path="/setting/account"
          component={UserAccountContainer}/>
      </div>
    );
  }
}

export default MainPage;
