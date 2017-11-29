import React from 'react';



class SongProgress extends React.Component {

  formatTime(length) {
    let min = Math.floor(length / 60);
    let sec = length % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }
    return `${min}:${sec}`;
  }

  render() {
    const { progress, length, setSeek } = this.props;
    let currentProgress = progress;
    if (length === null) {
      currentProgress = "";
    }
    return(
      <div className="song-progress">
        <p>{this.formatTime(Math.round(currentProgress))}</p>
        <input
          type="range"
          min="0"
          max={length}
          step="1"
          onChange={setSeek}
          value={progress}
          />
        <p>{this.formatTime(length)}</p>
      </div>
    );
  }
}

export default SongProgress;
