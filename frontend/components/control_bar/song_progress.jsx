import React from 'react';



class SongProgress extends React.Component {

  render() {
    const { progress, length } = this.props;
    let currentProgress = progress;
    if (length === null) {
      currentProgress = "";
    }
    return(
      <div className="song-progress">
        <p>{Math.round(currentProgress)}</p>
        <input
          type="range"
          min="0"
          max={length}
          step="1"
          value={progress}
          />
        <p>{length}</p>
      </div>
    );
  }
}

export default SongProgress;
