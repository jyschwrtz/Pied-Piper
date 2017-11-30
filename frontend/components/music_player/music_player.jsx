import React from 'react';

import SidebarContainer from '../sidebar/sidebar_container';
import MainPage from '../main_page/main_page';
import ControlBarContainer from '../control_bar/control_bar_container';
import { withRouter } from 'react-router-dom';

class MusicPlayer extends React.Component {

  componentDidMount(newProps) {
    this.props.requestSongs();
    this.props.requestUsers();
    this.props.requestPlaylists();

  }

  componentWillReceiveProps() {
    document.getElementsByClassName('music-player')[0].scrollTo(0, 0);
  }

  render() {
    let backgroundClass = "background";
    switch (this.props.match.path) {
      case "/search":
        backgroundClass += "-search";
        break;
      case "/collection":
        switch (this.props.location.pathname) {
          case "/collection/playlists":
            backgroundClass += "-collection-playlists";
            break;
          case "/collection/your_daily_mix":
            backgroundClass += "-collection-your-daily-mix";
            break;
          case "/collection/songs":
            backgroundClass += "-collection-songs";
            break;
          case "/collection/albums":
            backgroundClass += "-collection-albums";
            break;
          case "/collection/artists":
            backgroundClass += "-collection-artists";
            break;
        }
        break;
      case "/user":
        backgroundClass += "-user";
        break;
      case "/browse":
        switch (this.props.location.pathname) {
          case "/browse/featured":
            backgroundClass += "-browse-featured";
            break;
          case "/browse/genres_&_moods":
            backgroundClass += "-browse-genres-moods";
            break;
          case "/browse/new_releases":
            backgroundClass += "-browse-new-releases";
            break;
          case "/browse/discover":
            backgroundClass += "-browse-discover";
            break;
        }
        break;
    }
    return (
      <div className={backgroundClass}>
        <div className="music-player">
          <SidebarContainer />
          <MainPage />
          <ControlBarContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(MusicPlayer);
