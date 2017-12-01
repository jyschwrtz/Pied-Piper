import React from 'react';
import BrowseIndexContainer
  from '../browse/browse_index_container';
import SongIndex from '../song/song_index';
import UserIndexItem from './user_index_item';

export default (props) => {
  const { user, playlists, songs } = props;
  const playlistIds = playlists.map(playlist => playlist.id);
  console.log(songs);
  let userName;
  if (user) {
    userName = <h1>{user.username}</h1>;
  }
  return (
    <div className="user">
      <UserIndexItem user={user} />
      <div className="user-show-info">
        <div>
          <h1 className="user-title-header"></h1>
          <BrowseIndexContainer playlistIds={playlistIds} />
        </div>
        <div className="user-songs">
          <h1 className="user-title-header"></h1>
          <SongIndex songs={songs} />
        </div>
      </div>
    </div>
  );
};
