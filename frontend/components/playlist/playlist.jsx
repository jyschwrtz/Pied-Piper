import React from 'react';

class Playlist extends React.Component {

  componentWillMount() {
    console.log(this.props);
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchSongs();
  }

  render() {
    console.log(this.props.playlist);
    return(
      <h1>Playlist</h1>
    );
  }
}

export default Playlist;
