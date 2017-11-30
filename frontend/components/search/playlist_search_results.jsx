import React from 'react';
import BrowseIndexItemContainer from '../browse/browse_index_item_container';

export default (props) => {
  const { playlists, currentUser } = props;
  let content;
  if (playlists && playlists.length > 0) {
    content =
      <div className="playlist-search-results">
        <h1>Playlists</h1>
        <div className="playlist-search-index">
          {
            playlists.map(playlist => (
              <BrowseIndexItemContainer
                key={playlist.id}
                playlist={playlist}/>
            ))
          }
        </div>
      </div>;
  }
  return(
    <div>
      { content }
    </div>
  );
};
