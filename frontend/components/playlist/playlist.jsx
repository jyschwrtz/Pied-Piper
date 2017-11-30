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

  playPlaylist(e) {
    e.preventDefault();
    this.props.upNext(this.props.songs);
    if (!this.props.playing) {
      this.props.play();
    }
  }

  playSong(e, idx) {
    e.preventDefault();
    this.props.upNext(this.props.songs.slice(idx));
    this.props.pastSongsInPlaylists(this.props.songs.slice(0, idx));
    if (!this.props.playing) {
      this.props.play();
    }
  }

  render() {
    const { playlist, songs, owner, deletePlaylist } = this.props;
    let content;
    console.log(songs);
    if (this.props.songs) {
      content =
        <div className="playlist">
          <PlaylistDisplay
            playPlaylist={this.playPlaylist.bind(this)}
            playlist={playlist}
            owner={owner}
            deletePlaylist={deletePlaylist}
            songCount={songs.length}/>
          <SongIndex
            playSong={this.playSong.bind(this)}
            playlistSongIds={playlist.song_ids}
            songs={songs} />
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
