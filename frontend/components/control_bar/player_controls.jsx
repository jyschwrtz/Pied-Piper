import React from 'react';
import ReactHowler from 'react-howler';

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // playing: this.props.playing,
      // currentSong: this.props.currentSong,
      // currentSongFilename: "",
      loop: false,
      shuffle: false,
    };
  }

  // componentDidMount() {
  //   if (this.state.currentSong) {
  //     this.setState({ currentSongFilename: this.props.currentSong.filename });
  //   }
  // }

  componentWillReceiveProps(newProps) {
    this.setState({ currentSong: newProps.currentSong });
    this.props.requestSong(newProps.currentSong.id);
    console.log('HERE-------PLAYER-CONTROLS');
  }

  toggleLoop() {
    const loop = this.state.loop ? false : true;
    this.setState({loop});
  }

  toggleShuffle() {
    const shuffle = this.state.shuffle ? false : true;
    this.setState({shuffle});
  }

  render() {
    const { loop, shuffle } = this.state;
    const { playing, play, currentSong } = this.props;
    let howler;
    if (currentSong) {
      howler = (
        <ReactHowler
          src={[currentSong.filename]}
          playing={playing}
          volume={1}
          html5={true}
          loop={loop}
        />
      );
    }

    const playButton = playing ? (
      <i className="fa fa-pause-circle-o" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-play-circle-o" aria-hidden="true"></i>
    );

    const loopButtonClass = loop ? (
      "repeat-active btn"
    ) : (
      "repeat btn"
    );

    const shuffleButtonClass = shuffle ? (
      "shuffle-active btn"
    ) : (
      "shuffle btn"
    );

    return (
      <div >
        { howler }
        <div className="player-controls">
          <button
            onClick={this.toggleShuffle.bind(this)}
            className={shuffleButtonClass}>
            <i className="fa fa-random" aria-hidden="true"></i>
          </button>
          <button className="back btn">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
          </button>
          <button
            onClick={play}
            className="play btn"
            >{playButton}</button>
          <button className="forward btn">
            <i className="fa fa-step-forward" aria-hidden="true"></i>
          </button>
          <button
            onClick={this.toggleLoop.bind(this)}
            className={loopButtonClass}>
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PlayerControls;
