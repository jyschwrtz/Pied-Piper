import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import CollectionPlaylistsContainer from './collection_playlists_container';
import CollectionSongsContainer from './collection_songs_container';

class Collection extends React.Component {

  render() {
    const navTitles =
      ["Playlists", "Your Daily Mix", "Songs", "Albums", "Artists"];
    return (
      <div className="collection">
        <NavBar navTitles={navTitles} page="collection"/>
        <Route
          path="/collection/playlists"
          component={CollectionPlaylistsContainer}/>
        <Route
          path="/collection/songs"
          component={CollectionSongsContainer}/>
      </div>
    );
  }
}

export default Collection;
