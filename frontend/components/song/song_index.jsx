import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
// import SongIndexItem from './song_index_item';

export default (props) => {
  return(
    <div className="song-index">
      {
        props.songs.map((song, idx) => (
          <SongIndexItemContainer
            key={song.id}
            song={song}
            idx={idx}
            />
        ))
      }
    </div>
  );
};
