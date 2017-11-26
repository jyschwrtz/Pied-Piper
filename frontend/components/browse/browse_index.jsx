import React from 'react';
import BrowseIndexItem from './browse_index_item';

class BrowseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(newProps) {
  //   this.playlistIds = newProps.playlistIds;
  // }

  render() {
    const { playlists, requestPlaylist, currentUser, playlistIds} = this.props;
    // console.log(playlistIds);
    return(
      <ul className="browse-index">
        {
          playlistIds.map(playlistId => (
            <BrowseIndexItem
              key={playlistId}
              playlistId={playlistId}
              playlist={playlists[playlistId]}
              requestPlaylist={requestPlaylist}
              currentUser={currentUser}/>
          ))
        }
      </ul>
    );
  }
}

export default BrowseIndex;
