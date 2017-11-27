import React from 'react';
import BrowseIndexContainer from '../browse/browse_index_container';
import NavBar from '../nav_bar/nav_bar';
import PlaylistForm from '../playlist_form/playlist_form';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistForm: "playlist-modal hidden"
    };
    this.togglePlaylistForm = this.togglePlaylistForm.bind(this);
  }

  togglePlaylistForm(e) {
    e.preventDefault();
    let playlistForm = (
      this.state.playlistForm === "playlist-modal" ?
        "playlist-modal hidden" : "playlist-modal"
    );
    this.setState({ playlistForm });
  }

  render() {
    const navTitles =
      ["Playlists", "Your Daily Mix", "Songs", "Albums", "Artists"];
    const { createPlaylist, playlists } = this.props;
    const { playlistForm } = this.state;
    const playlistIds = playlists.map(playlist => playlist.id);
    return (
      <div className="collection">
        <NavBar navTitles={navTitles} page="collection"/>
        <button
          onClick={this.togglePlaylistForm}
          >
          New Playlist
        </button>
        <BrowseIndexContainer playlistIds={playlistIds} />
        <div className={playlistForm}>
          <PlaylistForm
            createPlaylist={createPlaylist}
            togglePlaylistForm={this.togglePlaylistForm}
          />
        </div>
      </div>
    );
  }
}

export default Collection;
