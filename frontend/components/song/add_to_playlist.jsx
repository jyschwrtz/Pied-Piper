import React from 'react';
import PlaylistIndex from '../playlist/playlist_index';
import PlaylistForm from '../playlist_form/playlist_form';
// import BrowseIndex from '../browse/browse_index';

class AddToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNewPlaylist: false
    };
    this.toggleNewPlaylistShow = this.toggleNewPlaylistShow.bind(this);
  }

  toggleNewPlaylistShow() {
    const displayNewPlaylist = this.state.displayNewPlaylist ? false : true;
    this.setState({ displayNewPlaylist });
  }

  render() {
    const {
      name, song, playlists, toggleAddToPlaylist, createPlaylistSong
    } = this.props;
    const newPlaylistClass = this.state.displayNewPlaylist ?
      "add-to-playlist-new-playlist" : "add-to-playlist-new-playlist hidden";
    return(
      <div className={name}>
        <button
          className="x-btn"
          type="button"
          onClick={toggleAddToPlaylist}>
          X
        </button>
        <div className="add-to-playlist-top">
          <h1>{"Add to playlist"}</h1>
          <button
            onClick={this.toggleNewPlaylistShow}
            className="typ-btn green-btn">
            New Playlist
          </button>
        </div>
        <div className="add-to-playlist-playlists">
          <PlaylistIndex
            playlists={playlists}
            createPlaylistSong={createPlaylistSong}
            toggleAddToPlaylist={toggleAddToPlaylist}
            song={song}/>
        </div>
        <div className={newPlaylistClass}>
          <PlaylistForm />
        </div>
      </div>
    );
  }
}

export default AddToPlaylist;
