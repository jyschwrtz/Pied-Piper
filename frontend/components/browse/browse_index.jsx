import React from 'react';
import BrowseIndexItemContainer from './browse_index_item_container';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(newProps) {
  //   this.playlistIds = newProps.playlistIds;
  // }

  render() {
    const { playlists, requestPlaylist, currentUser, playlistIds, play, upNext, songs} = this.props;
    return(
      <ul className="browse-index">
        {
          playlistIds.map(playlistId => (
            <BrowseIndexItemContainer
              key={playlistId}
              playlistId={playlistId}
              playlist={playlists[playlistId]}
              requestPlaylist={requestPlaylist}/>
          ))
        }
      </ul>
    );
  }
}

export default BrowseIndex;
