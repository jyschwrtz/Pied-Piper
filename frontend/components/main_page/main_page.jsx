import React from 'react';
import {
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import BrowseContainer from '../browse/browse_container';
import PlaylistContainer from '../playlist/playlist_container';
import Collection from '../collection/collection';
import SearchContainer from '../search/search_container';
import UserAccountContainer from '../user/user_account_container';
import UserContainer from '../user/user_container';

class MainPage extends React.Component {

  render() {
    return(
      <div className={"main-page"}>
        <Switch>
          <Route
            path="/browse"
            component={BrowseContainer}/>
          <Route
            path="/user/:userId/playlist/:playlistId"
            component={PlaylistContainer}/>
          <Route
            path="/user/:userId"
            component={UserContainer}/>
          <Route
            path="/collection"
            component={Collection}/>
          <Route
            path="/search"
            component={SearchContainer}/>
          <Route
            path="/setting/account"
            component={UserAccountContainer}/>
        </Switch>
      </div>
    );
  }
}

export default MainPage;
