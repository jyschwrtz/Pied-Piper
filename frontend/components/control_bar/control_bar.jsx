import React from 'react';
import CurrentSong from './current_song';
import PlayerControlsContainer from './player_controls_container';
import SongProgress from './song_progress';
import VolumeControlsContainer from './volume_controls_container';
import ReactHowler from 'react-howler';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.player = null;
  }

  componentDidMount() {
    // if (this.player) {
      // this.progressTracker = setInterval(() => {
      //   this.setState({progress: this.player.seek()});
      // }, 1000);
    // }
  }

  componentWillUnmount() {
    clearInterval(this.progressTracker);
  }

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
    const { progress } = this.state;
    let howler;
    let length = null;
    if (currentSong) {
      length = currentSong.length;
      howler = (
        <ReactHowler
          ref={(ref) => (this.player = ref)}
          src={[currentSong.filename]}
          playing={playing}
          volume={volumeLevel}
          html5={true}
          loop={looping}
          onEnd={nextSong}
        />
      );
      if (!this.progressTracker) {
        this.progressTracker = setInterval(() => {
          this.setState({
            progress: this.player.seek()
          });
        }, 1000);
      }
    }

    return(
      <div>
        <div className="control-bar">
          <CurrentSong
            song={currentSong}
            artist={artist}/>
          <div className="control-bar-center">
            <PlayerControlsContainer />
            <SongProgress
              length={length}
              progress={progress}/>
          </div>
          <VolumeControlsContainer
            volumeLevel={volumeLevel}
            />
        </div>
        { howler }
      </div>
    );
  }
}

export default ControlBar;
