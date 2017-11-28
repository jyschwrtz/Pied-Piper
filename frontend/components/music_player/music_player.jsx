import React from 'react';

import SidebarContainer from '../sidebar/sidebar_container';
import MainPage from '../main_page/main_page';
import ControlBarContainer from '../control_bar/control_bar_container';

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
    return (
      <div className="music-player">
        <SidebarContainer />
        <MainPage />
        <ControlBarContainer />
      </div>
    );
  }
}

export default MusicPlayer;
