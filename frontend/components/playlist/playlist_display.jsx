import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistDisplay extends React.Component {

  render() {
    const { playlist, owner } = this.props;
    let playlistOwnerName;
    if (owner) {
      playlistOwnerName = owner.username;
    }
    return (
      <div className="playlist-display">
        <img
          src={playlist.image_url}
          className="album-cover"
        />
        <div className="playlist-info">
          <h1>{playlist.title}</h1>
          <h2>
            <span>By </span>
            <Link
            to="/browse/featured">
              {playlistOwnerName}
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
