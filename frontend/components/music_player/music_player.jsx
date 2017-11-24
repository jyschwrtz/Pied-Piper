import React from 'react';

import SidebarContainer from '../sidebar/sidebar_container';
import MainPage from '../main_page/main_page';
import ControlBar from '../control_bar/control_bar';

const MusicPlayer = () => (
  <div className="music-player">
    <SidebarContainer />
    <MainPage />
    <ControlBar />
  </div>
);

export default MusicPlayer;
