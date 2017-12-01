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
      progress: 0,
      volumeLevel: 1,
    };
    this.player = null;
    this.setSeek = this.setSeek.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.progressTracker);
    this.progressTracker = null;
  }

  setSeek(e) {
    if (this.props.currentSong) {
      this.player.seek(e.target.value);
    }
  }

  handleChange(e) {
    this.setState({ volumeLevel: parseInt(e.target.value * 100) / 100 });
  }

  render() {
    const {
      play,
      playing,
      currentSong,
      currentUser,
      currentPlaylist,
      nextSong,
      loop,
      shuffle,
      shuffling,
      looping,
      artist,
    } = this.props;
    const { progress, volumeLevel } = this.state;
    let howler;
    let duration = 0;
    if (this.player) {
      duration = Math.floor(this.player.duration());
    }

    if (currentSong) {
      let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/all_songs/${currentSong.filename}`;
      howler = (
        <ReactHowler
          ref={(ref) => (this.player = ref)}
          src={[src]}
          playing={playing}
          volume={volumeLevel}
          html5={true}
          loop={false}
          onEnd={nextSong}
        />
      );
      if (!this.progressTracker) {
        this.progressTracker = setInterval(() => {
          if (this.player) {
            let newProgress = this.player.seek();
            this.setState({
              progress: newProgress,
            });
          }
        }, 500);
      }
    }

    let volumeIcon;
    if (volumeLevel > .5) {
      volumeIcon = <i className="fa fa-volume-up" aria-hidden="true"></i>;
    } else if (volumeLevel < 0.02) {
      volumeIcon = <i className="fa fa-volume-off" aria-hidden="true"></i>;
    } else {
      volumeIcon = <i className="fa fa-volume-down" aria-hidden="true"></i>;
    }

    return(
      <div>
        <div className="control-bar">
          <CurrentSong
            song={currentSong}
            currentUser={currentUser}
            play={play}
            playing={playing}
            playlist={currentPlaylist}
            artist={artist}/>
          <div className="control-bar-center">
            <PlayerControlsContainer />
            <SongProgress
              length={duration}
              setSeek={this.setSeek}
              progress={progress}/>
          </div>

          <div className="volume-controls">
            <div className="volume-icon">
              { volumeIcon }
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              onChange={this.handleChange.bind(this)}
              value={volumeLevel}
              />
          </div>

        </div>
        { howler }
      </div>
    );
  }
}

export default ControlBar;
