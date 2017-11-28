import React from 'react';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectPlaylist = this.selectPlaylist.bind(this);
  }

  selectPlaylist(e) {
    e.preventDefault();
    const { playlist, song, createPlaylistSong } = this.props;
    createPlaylistSong(song.id, playlist.id);
  }

  render() {
    const { playlist } = this.props;
    let content;
    if (playlist) {
      content = (
       <div className='browse-index-item'>
          <button
            onClick={this.selectPlaylist}>
            <img src={playlist.image_url}/>
            <p>{playlist.title}</p>
          </button>
       </div>
     );
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}

export default PlaylistIndexItem;
