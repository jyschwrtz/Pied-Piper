import React from 'react';
import SongMenuContainer from './song_menu_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songMenuDisplay: false
    };
    // this.song = this.props.song;
    this.playSong = this.playSong.bind(this);
    this.toggleSongMenu = this.toggleSongMenu.bind(this);
  }

  playSong(e) {
    e.preventDefault();
    this.props.receiveCurrentSong(this.props.song);
  }

  formatTime(length) {
    let min = Math.floor(length / 60);
    let sec = length % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  }

  toggleSongMenu(e) {
    e.preventDefault();
    let songMenuDisplay = this.state.songMenuDisplay ? false : true;
    this.setState({ songMenuDisplay });
  }

  render() {
    const { song, idx } = this.props;
    const time = this.formatTime(song.length);
    const songMenuClass =
      this.state.songMenuDisplay ? "song-menu" : "song-menu hidden";
    return(
      <li
        className="song-index-item"
        onClick={this.playSong}
        >
        <div className="song-number">
          <span>{idx + 1}.</span>
        </div>
        <div className="song-play">
          <button
            className="song-play-btn">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>
        </div>
        <div className="song-title">
          <span>{song.song_name}</span>
        </div>
        <div className="song-menu">
          <button
            className="show-song-menu"
            onClick={this.toggleSongMenu}>
            ...
          </button>

          <SongMenuContainer
            song={song}
            toggleSongMenu={this.toggleSongMenu}
            songMenuClass={songMenuClass}/>

        </div>
        <div className="song-length">
          <span>{time}</span>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
