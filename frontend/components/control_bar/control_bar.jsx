import React from 'react';
import CurrentSong from './current_song';
import PlayerControlsContainer from './player_controls_container';
import SongProgress from './song_progress';
import VolumeControlsContainer from './volume_controls_container';
import ReactHowler from 'react-howler';

class ControlBar extends React.Component {

  render() {
    const {
      playing,
      currentSong,
      nextSong,
      loop,
      shuffle,
      shuffling,
      looping,
      artist,
      volumeLevel
    } = this.props;
    let howler;
    if (currentSong) {
      howler = (
        <ReactHowler
          src={[currentSong.filename]}
          playing={playing}
          volume={volumeLevel}
          html5={true}
          loop={looping}
          onEnd={nextSong}
        />
      );
    }
    return(
      <div>
        <div className="control-bar">
          <CurrentSong
            song={currentSong}
            artist={artist}/>
          <div className="control-bar-center">
            <PlayerControlsContainer />
            <SongProgress />
          </div>
          <VolumeControlsContainer
            volumeLevel={volumeLevel}/>
        </div>
        { howler }
      </div>
    );
  }
}

export default ControlBar;
