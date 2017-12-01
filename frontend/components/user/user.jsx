import React from 'react';
import BrowseIndexContainer
  from '../browse/browse_index_container';
import UserIndexItem from './user_index_item';

export default (props) => {
  const { user, playlists } = props;
  const playlistIds = playlists.map(playlist => playlist.id);
  console.log(playlists);
  let userName;
  if (user) {
    userName = <h1>{user.username}</h1>;
  }
  return (
    <div className="user">
      <UserIndexItem user={user} />
      <h1>Playlists</h1>
      <BrowseIndexContainer playlistIds={playlistIds} />
    </div>
  );
};
