import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistDisplay extends React.Component {

  handleClick(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlist.id);
    this.props.history.push('/collection/playlists');
  }

  render() {
    const { playlist, owner } = this.props;
    let playlistOwnerName;
    let deleteButton;
    if (owner) {
      playlistOwnerName = owner.username;
      if (playlist.owner_id == this.props.match.params.userId) {
        deleteButton = (
          <button
            className="typ-btn black-btn"
            onClick={this.handleClick.bind(this)}>
            DELETE
          </button>
        );
      }
    }
    return (
      <div className="playlist-display">
        <img
          src={playlist.image_url}
          className="album-cover"
        />
        <div className="playlist-info">
          <div>
            <h1>{playlist.title}</h1>
            <h2>
              <span>By </span>
              <Link
                to="/browse/featured">
                {playlistOwnerName}
              </Link>
            </h2>
          </div>
          <div className="buttons">
            <button className="typ-btn green-btn">
              PLAY
            </button>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistDisplay);


// <button
//   className="delete-btn"
//   onClick={this.togglePlaylistMenu.bind(this)}>
//   ...
// </button>
