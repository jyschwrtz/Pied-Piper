import React from 'react';
import CurrentSong from './current_song';
import PlayerControlsContainer from './player_controls_container';
import SongProgress from './song_progress';
import VolumeControls from './volume_controls';


class ControlBar extends React.Component {

  render() {
    return(
      <div className="control-bar">
        <CurrentSong />
        <div className="control-bar-center">
          <PlayerControlsContainer />
          <SongProgress />
        </div>
        <VolumeControls />
      </div>
    );
  }
}

export default ControlBar;
