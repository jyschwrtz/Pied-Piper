import React from 'react';
import ReactHowler from 'react-howler';

class Browse extends React.Component {

  render() {
    return(
      <div className="browse">
        <h1>Browse</h1>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button
          className="logout-btn"
          onClick={this.props.logout}
          >Log Out</button>

          <ReactHowler
            src={['https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Melanie_Ungar_-_Crazy_Glue.mp3', 'https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Craze_24_-_Rolling__Original_Clean_.mp3']}
            playing={true}
            volume={1}
            html5={true}
          />
      </div>
    );
  }
}

export default Browse;
