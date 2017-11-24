import React from 'react';
import ReactHowler from 'react-howler';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  togglePlay() {
    const playing = this.state.playing === true ? false : true;
    this.setState({playing});
  }

  render() {
    const { playing } = this.state;
    return (
      <div className="control-bar">
        <h1>Control Bar</h1>

        <ReactHowler
          src={['https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Melanie_Ungar_-_Crazy_Glue.mp3', 'https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Craze_24_-_Rolling__Original_Clean_.mp3']}
          playing={playing}
          volume={1}
          html5={true}
        />
        <button
          onClick={this.togglePlay.bind(this)}
          >Play/Pause</button>
      </div>
    );
  }
}

export default ControlBar;