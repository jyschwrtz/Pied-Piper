import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.song = this.props.song;
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    const { song, idx } = this.props;
    return(
      <div className="song-index-item">
        <h2
          onClick={this.handleClick}
          >
          <span>
            {idx + 1}:
          </span>
          {song.song_name}
        </h2>
      </div>
    );
  }
}

export default SongIndexItem;
