import React from 'react';
import PlaylistDisplay from './playlist_display';
import SongIndex from '../song/song_index';

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
    const { playlist, songs, owner, deletePlaylist } = this.props;
    let content;
    if (this.props.songs) {
      content =
        <div className="playlist">
          <PlaylistDisplay
            playlist={playlist}
            owner={owner}
            deletePlaylist={deletePlaylist}/>
          <SongIndex songs={songs} />
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
