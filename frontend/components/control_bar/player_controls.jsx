import React from 'react';
import ReactHowler from 'react-howler';

class PlayerControls extends React.Component {

  render() {
    const { playing, play, currentSong, nextSong, previousSong, looping, shuffling, loop, shuffle } = this.props;

    const playButton = playing ? (
      <i className="fa fa-pause-circle-o" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-play-circle-o" aria-hidden="true"></i>
    );

    const loopButtonClass = looping ? (
      "repeat-active btn"
    ) : (
      "repeat btn"
    );

    const shuffleButtonClass = shuffling ? (
      "shuffle-active btn"
    ) : (
      "shuffle btn"
    );

    return (
      <div >
        <div className="player-controls">
          <button
            onClick={shuffle}
            className={shuffleButtonClass}>
            <i className="fa fa-random" aria-hidden="true"></i>
          </button>
          <button
            onClick={previousSong}
            className="back btn">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
          </button>
          <button
            onClick={play}
            className="play btn"
            >{playButton}</button>
          <button
            onClick={nextSong}
            className="forward btn">
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </button>
          <button
            onClick={loop}
            className={loopButtonClass}>
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PlayerControls;
