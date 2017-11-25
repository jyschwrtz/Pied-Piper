import React from 'react';
import PlaylistDisplay from './playlist_display';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    // this.props.requestPlaylists();
    // this.props.requestSongs();
    this.props.requestPlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;
    let content;
    if (this.props.songs) {
      content =
          <div className="playlist">
            <PlaylistDisplay playlist={playlist} />
            {
              this.props.songs.map((song, idx) => (
              <h1 key={song.id}>{idx + 1}: {song.song_name}</h1>
              ))
            }
          </div>;
    }
    return(
      <div>
        { content }
      </div>
    );
  }
}

export default Playlist;
