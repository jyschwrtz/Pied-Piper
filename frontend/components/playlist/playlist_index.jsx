import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default (props) => {
  const { playlists, song, createPlaylistSong } = props;
  return (
    <ul className="playlist-index">
      {
        playlists.map(playlist => (
          <PlaylistIndexItem
            key={playlist.id}
            playlist={playlist}
            createPlaylistSong={createPlaylistSong}
            song={song}/>
        ))
      }
    </ul>
  );
};
