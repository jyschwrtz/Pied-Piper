import React from 'react';
import ReactHowler from 'react-howler';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
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
    console.log(this.state);
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

    return (
      <div className="control-bar">
        <h1>Control Bar</h1>

        { howler }

        <button
          onClick={this.togglePlay.bind(this)}
          >Play/Pause</button>
      </div>
    );
  }
}

export default ControlBar;
