import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import CollectionPlaylistsContainer from './collection_playlists_container';
import CollectionSongsContainer from './collection_songs_container';
import CollectionDailyMix from './collection_daily_mix';
import CollectionArtistsContainer from './collection_artists_container';

class Collection extends React.Component {

  render() {
    const navTitles =
      ["Playlists", "Your Daily Mix", "Songs", "Artists"];
    return (
      <div className="collection">
        <NavBar navTitles={navTitles} page="collection"/>
        <Route
          path="/collection/playlists"
          component={CollectionPlaylistsContainer}/>
        <Route
          path="/collection/your_daily_mix"
          component={CollectionDailyMix}/>
        <Route
          path="/collection/songs"
          component={CollectionSongsContainer}/>
        <Route
          path="/collection/artists"
          component={CollectionArtistsContainer}/>
      </div>
    );
  }
}

export default Collection;
