import React from 'react';
import SongMenuContainer from './song_menu_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songMenuDisplay: false
    };
    this.toggleSongMenu = this.toggleSongMenu.bind(this);
  }

  playPauseSong(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.play();
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
    e.stopPropagation();
    e.preventDefault();
    let songMenuDisplay = this.state.songMenuDisplay ? false : true;
    this.setState({ songMenuDisplay });
  }

  render() {
    const {
      song, idx, playlistSongIds, currentSong, playing, play, artist
    } = this.props;
    let username = "";
    if (artist) {
      username = artist.username;
    }
    const time = this.formatTime(song.length);
    const songMenuClass =
      this.state.songMenuDisplay ? "song-menu" : "song-menu hidden";

    let noiseIcon;
    let playPauseIcon = <i className="fa fa-play" aria-hidden="true"></i>;
    let action = this.props.playSong;
    let songClass = "song-index-item";
    if (currentSong
        && playlistSongIds
        && playlistSongIds[idx] === currentSong.id) {
      songClass += " selected-song";
      action = this.playPauseSong.bind(this);
      if (playing) {
        playPauseIcon = <i className="fa fa-pause" aria-hidden="true"></i>;
        noiseIcon = <i className="fa fa-volume-up" aria-hidden="true"></i>;
      }
    }

    return(
      <li
        className={songClass}
        onClick={this.props.playSong}
        >
        <div className="song-number">
          <span>{idx + 1}.</span>
        </div>
        <div className="song-play">
          <button
            onClick={action}
            className="song-play-btn">
            <div className="play-pause-icon">
              {playPauseIcon}
            </div>
            <div className="noise-icon">
              {noiseIcon}
            </div>
          </button>
        </div>
        <div className="song-information">
          <span className="song-title">
            {song.song_name}
          </span>
          <span className="song-artist">
            {username}
          </span>
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
