import React from 'react';

class PlaylistDisplay extends React.Component {

  render() {
    const { playlist } = this.props;
    console.log(playlist);
    return (
      <div className="PlaylistDisplay">
        <img src={playlist.image_url} />
        <h1>{playlist.title}</h1>
      </div>
    );
  }
}

export default PlaylistDisplay;
