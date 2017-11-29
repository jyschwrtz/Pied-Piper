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
        backgroundClass += "-collection";
        break;
      case "/user":
        backgroundClass += "-user";
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
