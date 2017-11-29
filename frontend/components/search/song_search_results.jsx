import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';

export default (props) => {
  const { songs } = props;
  let content;
  if (songs && songs.length > 0) {
    content =
    <div>
      <h1>Songs:</h1>
      {
        songs.map((song, idx) => (
          <SongIndexItemContainer
            key={song.id}
            song={song}
            idx={idx}
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
};
