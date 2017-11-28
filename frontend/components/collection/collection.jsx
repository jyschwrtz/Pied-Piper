import React from 'react';
import BrowseIndexContainer from '../browse/browse_index_container';
import NavBar from '../nav_bar/nav_bar';
import PlaylistForm from '../playlist_form/playlist_form';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistForm: "playlist-modal hidden",
      playlistIds: this.props.playlists.map(playlist => playlist.id)
    };
    this.togglePlaylistForm = this.togglePlaylistForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playlists !== this.props.playlists) {
      this.setState({
        playlistIds: newProps.playlists.map(playlist => playlist.id)
      });
    }
  }

  togglePlaylistForm(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
      return;
    } else {
      let playlistForm = (
        this.state.playlistForm === "modal" ?
        "modal hidden" : "modal"
      );
      this.setState({ playlistForm });
    }
  }

  render() {
    const navTitles =
      ["Playlists", "Your Daily Mix", "Songs", "Albums", "Artists"];
    const { createPlaylist, playlists } = this.props;
    const { playlistForm, playlistIds } = this.state;
    // playlistIds = playlists.map(playlist => playlist.id);
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
