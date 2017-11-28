import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

export default (props) => {
  const { playlists, song, createPlaylistSong, toggleAddToPlaylist } = props;
  return (
    <ul className="playlist-index">
      {
        playlists.map(playlist => (
          <PlaylistIndexItem
            key={playlist.id}
            playlist={playlist}
            createPlaylistSong={createPlaylistSong}
            toggleAddToPlaylist={toggleAddToPlaylist}
            song={song}/>
        ))
      }
    </ul>
  );
};
