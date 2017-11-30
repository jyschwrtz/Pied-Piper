import React from 'react';
import BrowseIndexItemContainer from '../browse/browse_index_item_container';

export default (props) => {
  const { playlists, currentUser } = props;
  let content;
  if (playlists && playlists.length > 0) {
    content =
      <div>
        <h1>Playlists:</h1>
        {
          playlists.map(playlist => (
            <BrowseIndexItemContainer
              key={playlist.id}
              playlist={playlist}/>
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
