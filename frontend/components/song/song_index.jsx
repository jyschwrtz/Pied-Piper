import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
// import SongIndexItem from './song_index_item';

class SongIndexItem extends React.Component {

  render() {
    return(
      <div className="song-index">
        {
          this.props.songs.map((song, idx) => (
            <SongIndexItemContainer
              key={song.id}
              song={song}
              playSong={(e) => this.props.playSong(e, idx)}
              idx={idx}
              playlistSongIds={this.props.playlistSongIds}
              />
          ))
        }
      </div>
    );
  }
}

export default SongIndexItem;
