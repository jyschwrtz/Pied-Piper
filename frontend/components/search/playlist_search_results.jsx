import React from 'react';
import BrowseIndexItem from '../browse/browse_index_item';

export default (props) => {
  const { playlists, currentUser } = props;
  console.log( playlists);
  let content;
  if (playlists && playlists.length > 0) {
    content =
      <div>
        <h1>Playlists:</h1>
        {
          playlists.map(playlist => (
            <BrowseIndexItem
              key={playlist.id}
              playlistId={playlist.id}
              playlist={playlist}
              currentUser={currentUser}/>
          ))
        }
      </div>;
  }
  return(
    <div className="playlist-search-results">
      { content }
    </div>
  );
};
