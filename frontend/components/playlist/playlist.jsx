import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentWillMount() {
    this.props.requestPlaylists();
    this.props.requestSongs();
    this.props.requestPlaylist(this.props.match.params.playlistId);
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return(
      <div>
        {
          this.props.songs.map((song, idx) => (
            <h1 key={song.id}>{idx + 1}: {song.song_name}</h1>
          ))
        }
      </div>
    );
  }
}

export default Playlist;
