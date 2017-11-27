import React from 'react';

class SongMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songMenuDisplay: true
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
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

  addToPlaylist(song) {
    
  }

  render() {
    const { song } = this.props;
    return(
      <div
        ref={this.setWrapperRef}
        className={this.props.songMenuClass}>
          <ul className="song-menu-list">
            <li
              onClick={this.addToPlaylist(song)}>{"Add to playlist"}</li>
            <li>{"Remove from this Playlist"}</li>
          </ul>
      </div>
    );
  }
}

export default SongMenu;


// code for handling outside click referenced from :
// "https://stackoverflow.com/questions/32553158/detect-click-outside-react-component"
