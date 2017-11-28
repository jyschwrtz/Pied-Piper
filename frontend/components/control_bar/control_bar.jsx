import React from 'react';
import CurrentSong from './current_song';
import PlayerControlsContainer from './player_controls_container';
import SongProgress from './song_progress';
import VolumeControls from './volume_controls';
import ReactHowler from 'react-howler';

class ControlBar extends React.Component {

  render() {
    const { playing, currentSong, nextSong, loop, shuffle, shuffling, looping } = this.props;
    let howler;
    if (currentSong) {
      howler = (
        <ReactHowler
          src={[currentSong.filename]}
          playing={playing}
          volume={1}
          html5={true}
          loop={looping}
          onEnd={nextSong}
        />
      );
    }
    return(
      <div>
      <div className="control-bar">
        <CurrentSong />
        <div className="control-bar-center">
          <PlayerControlsContainer />
          <SongProgress />
        </div>
        <VolumeControls />
      </div>
      { howler }
      </div>
    );
  }
}

export default ControlBar;
