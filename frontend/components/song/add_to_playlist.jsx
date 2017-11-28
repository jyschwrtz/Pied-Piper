import React from 'react';
import PlaylistIndex from '../playlist/playlist_index';
// import PlaylistForm from '../playlist_form/playlist_form';
// import BrowseIndex from '../browse/browse_index';

class AddToPlaylist extends React.Component {
  render() {
    const {
      name, song, playlists, toggleAddToPlaylist, createPlaylistSong
    } = this.props;
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
            className="typ-btn green-btn">
            New Playlist
          </button>
        </div>
        <div className="add-to-playlist-playlists">
          <PlaylistIndex
            playlists={playlists}
            createPlaylistSong={createPlaylistSong}
            song={song}/>
        </div>

      </div>
    );
  }
}

export default AddToPlaylist;


  // <PlaylistForm />
