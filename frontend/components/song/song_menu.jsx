import React from 'react';
import AddToPlaylistContainer from './add_to_playlist_container';

class SongMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addToPlaylistDisplay: false
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.toggleAddToPlaylist = this.toggleAddToPlaylist.bind(this);
    this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOutsideClick(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.wrapperRef.className === "song-menu") {
        this.props.toggleSongMenu(e);
      }
    }
  }

  toggleAddToPlaylist(e) {
    e.stopPropagation();
    // e.preventDefault();
    let addToPlaylistDisplay = this.state.addToPlaylistDisplay ? false : true;
    this.setState({ addToPlaylistDisplay });
    console.log(this.props.songMenuClass);
    if (this.props.songMenuClass === "song-menu" && this.state.addToPlaylistDisplay) {
      this.props.toggleSongMenu(e);
    }
  }

  removeFromPlaylist(song) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      const playlistId = this.props.match.params.playlistId;
      this.props.deletePlaylistSong(song.id, playlistId);
    };
  }

  render() {
    const { song } = this.props;
    const addToPlaylistClass = this.state.addToPlaylistDisplay ?
      "modal" : "modal hidden";
    return(
      <div
        ref={this.setWrapperRef}
        className={this.props.songMenuClass}>
          <ul className="song-menu-list">
            <li
              onClick={this.toggleAddToPlaylist}>{"Add to playlist"}</li>
            <li
              onClick={this.removeFromPlaylist(song)}>{"Remove from this Playlist"}</li>
          </ul>
          <AddToPlaylistContainer
            name={addToPlaylistClass}
            toggleAddToPlaylist={this.toggleAddToPlaylist}
            song={song}/>
      </div>
    );
  }
}

export default SongMenu;


// code for handling outside click referenced from :
// "https://stackoverflow.com/questions/32553158/detect-click-outside-react-component"
