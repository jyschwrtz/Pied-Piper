import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';

class SongSearchResults extends React.Component {
  playSong(e, idx) {
    e.preventDefault();
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
      <div>
        <h1>Songs:</h1>
        {
          songs.map((song, idx) => (
            <SongIndexItemContainer
              key={song.id}
              playSong={(e) => this.playSong(e, idx)}
              playlistSongIds={songIds}
              song={song}
              idx={idx}
              songs={songs}
              />
          ))
        }
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
