import React from 'react';
import BrowseIndexContainer
  from '../browse/browse_index_container';
import SongIndex from '../song/song_index';
import UserIndexItem from './user_index_item';

class User extends React.Component {
  playSong(e, idx) {
    e.preventDefault();
    e.stopPropagation();
    this.props.upNext(this.props.songs.slice(idx));
    this.props.pastSongsInPlaylists(this.props.songs.slice(0, idx));
    if (!this.props.playing) {
      this.props.play();
    }
  }

  render() {
    const { user, playlists, songs } = this.props;
    const playlistIds = playlists.map(playlist => playlist.id);
    let userName;
    if (user) {
      userName = <h1>{user.username}</h1>;
    }
    return (
      <div className="user">
        <UserIndexItem user={user} />
        <div className="user-show-info">
          <div className="user-playlists">

            <BrowseIndexContainer playlistIds={playlistIds} />
          </div>
          <div className="user-songs">

            <SongIndex
              playSong={this.playSong.bind(this)}
              playlistSongIds={songs.map(song => song.id)}
              songs={songs} />
          </div>
        </div>
      </div>
    );
  }
}

export default User;
