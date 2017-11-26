import React from 'react';
import BrowseIndexItem from './browse_index_item';

export default (props) => {
  const { playlists, requestPlaylist } = props;
  return(
    <ul className="browse-index">
      <BrowseIndexItem
        playlistId={4}
        playlist={playlists[4]}
        requestPlaylist={requestPlaylist}/>
      <BrowseIndexItem
        playlistId={5}
        playlist={playlists[5]}
        requestPlaylist={requestPlaylist}/>
      <BrowseIndexItem
        playlistId={6}
        playlist={playlists[6]}
        requestPlaylist={requestPlaylist}/>
    </ul>
  );
};
