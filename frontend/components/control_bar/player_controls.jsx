import React from 'react';
import ReactHowler from 'react-howler';

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentSong: this.props.currentSong,
      currentSongFilename: "",
    };
  }

  componentDidMount() {
    if (this.state.currentSong) {
      this.setState({ currentSongFilename: this.state.currentSong.filename });
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ currentSong: newProps.currentSong });
    this.props.requestSong(newProps.currentSong.id);
  }

  togglePlay() {
    const playing = this.state.playing === true ? false : true;
    this.setState({playing});
  }

  render() {
    const { playing, currentSong, currentSongFilename } = this.state;
    let howler;
    if (currentSong) {
      howler = (
        <ReactHowler
          src={[currentSong.filename]}
          playing={playing}
          volume={1}
          html5={true}
        />
      );
    }

    const playButton = playing ? (
      <i className="fa fa-pause-circle-o" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-play-circle-o" aria-hidden="true"></i>
    );

    return (
      <div className="player-controls">
        { howler }

        <button className="shuffle-button">
          <i className="fa fa-random" aria-hidden="true"></i>
        </button>
        <button className="back-button">
          <i className="fa fa-step-backward" aria-hidden="true"></i>
        </button>
        <button
          onClick={this.togglePlay.bind(this)}
          className="play-button"
          >{playButton}</button>
        <button className="forward-button">
          <i className="fa fa-step-forward" aria-hidden="true"></i>
        </button>
        <button className="repeat-button">
          <i className="fa fa-repeat" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default PlayerControls;
