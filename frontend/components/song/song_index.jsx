import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
// import SongIndexItem from './song_index_item';

class SongIndexItem extends React.Component {

  render() {
    const { songs } = this.props;
    let content;
    if (songs.length > 0 && songs[0]) {
      content = (
        songs.map((song, idx) => (
          <SongIndexItemContainer
            key={song.id}
            song={song}
            playSong={(e) => this.props.playSong(e, idx)}
            idx={idx}
            playlistSongIds={this.props.playlistSongIds}
            />
        ))
      );
    }
    return(
      <div className="song-index">
        { content }
      </div>
    );
  }
}

export default SongIndexItem;
