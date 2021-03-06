import React from 'react';
import SongIndex from '../song/song_index';

class SongSearchResults extends React.Component {
  playSong(e, idx) {
    e.preventDefault();
    e.stopPropagation();
    this.props.upNext(this.props.songs.slice(idx));
    this.props.pastSongsInPlaylists(this.props.songs.slice(0, idx));
    if (!this.props.playing) {
      this.props.play();
    }
  }

  render() {
    const { songs } = this.props;
    let content, songIds;
    if (songs && songs.length > 0) {
      songIds = Object.values(songs).map(song => song.id);
      content =
      <div >
        <SongIndex
          playSong={this.playSong.bind(this)}
          playlistSongIds={songs.map(song => song.id)}
          songs={songs} />
      </div>;
    }
    return(
      <div className="song-search-results">
        { content }
      </div>
    );
  }
}

export default SongSearchResults;
