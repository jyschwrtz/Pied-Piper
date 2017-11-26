import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistDisplay extends React.Component {

  render() {
    const { playlist } = this.props;
    return (
      <div className="playlist-display">
        <img
          src={playlist.image_url}
          className="album-cover"
        />
        <div className="playlist-info">
          <h1>{playlist.title}</h1>
          <h2><span>By </span><Link to="/browse/featured">artist_name</Link></h2>
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
