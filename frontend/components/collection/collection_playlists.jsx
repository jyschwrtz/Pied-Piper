import React from 'react';
import BrowseIndexContainer from '../browse/browse_index_container';
import PlaylistForm from '../playlist_form/playlist_form';

class CollectionPlaylists extends React.Component {
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
    const { createPlaylist, playlists } = this.props;
    const { playlistForm, playlistIds } = this.state;
    let playlistArray = [];
    if (playlistIds.length > 5) {
      const mid = Math.floor(playlistIds.length / 2);
      playlistArray = [playlistIds.slice(0, mid), playlistIds.slice(mid)];
    } else {
      playlistArray = [playlistIds];
    }
    return (
      <div className="collection-playlists">
        <button
          onClick={this.togglePlaylistForm}>
          New Playlist
        </button>
        {
          playlistArray.map((playlistArrayIds, idx) => (
            <BrowseIndexContainer
              key={idx}
              playlistIds={playlistArrayIds} />
          ))
        }
        <div className={playlistForm}>
          <PlaylistForm
            createPlaylist={createPlaylist}
            togglePlaylistForm={this.togglePlaylistForm}/>
        </div>
      </div>
    );
  }
}

export default CollectionPlaylists;
