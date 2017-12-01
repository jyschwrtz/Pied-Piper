import React from 'react';
import SongIndex from '../song/song_index';

class CollectionSongs extends React.Component {
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
    return(
      <div className="collection-songs">
        {
          <SongIndex
            playSong={this.playSong.bind(this)}
            playlistSongIds={songs.map(song => song.id)}
            songs={songs} />
        }
      </div>
    );
  }
}
export default CollectionSongs;
