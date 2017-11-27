import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.song = this.props.song;
    this.playSong = this.playSong.bind(this);
    this.showSongMenu = this.showSongMenu.bind(this);
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

  showSongMenu(e) {
    e.preventDefault();

  }

  render() {
    const { song, idx } = this.props;
    const time = this.formatTime(song.length);
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
            onClick={this.showSongMenu}>
            ...
          </button>
        </div>
        <div className="song-length">
          <span>{time}</span>
        </div>
        <div className="song-hover">

        </div>
      </li>
    );
  }
}

export default SongIndexItem;
