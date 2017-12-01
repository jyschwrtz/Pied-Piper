import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.state.edit = false;
  }

  handleSubmitEdit(e) {
    e.preventDefault();
    this.props.updatePlaylist(this.state);
    this.toggleEdit(e);
  }

  toggleEdit(e) {
    e.preventDefault();
    const edit = this.state.edit ? false : true;
    this.setState({ edit });
  }

  handleTitleChange() {
    return (e) => {
      e.preventDefault();
      this.setState({ title: e.target.value });
    };
  }

  handleClickDelete(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlist.id);
    this.props.history.push('/collection/playlists');
  }

  render() {
    const { playlist, owner, playPlaylist, songCount } = this.props;
    let playlistOwnerName, songNumber, playlistTitle,
        userId, editButton, deleteButton, src;
    if (owner) {
      userId = owner.id;
      playlistOwnerName = owner.username;
      if (playlist.owner_id == this.props.match.params.userId) {
        deleteButton = (
          <button
            className="typ-btn black-btn"
            onClick={this.handleClickDelete.bind(this)}>
            DELETE
          </button>
        );
        if (this.state.edit === false) {
          editButton = (
            <button
              onClick={this.toggleEdit.bind(this)}
              className="edit-btn">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          );
        }
      }
    }

    if (songCount > 1) {
      songNumber =  <h3 className="song-count">{songCount} SONGS</h3>;
    } else if(songCount === 1) {
      songNumber =  <h3 className="song-count">{songCount} SONG</h3>;
    }

    if (playlist) {
      src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
    }

    if (this.state.edit) {
      playlistTitle = (
        <form onSubmit={this.handleSubmitEdit.bind(this)}>
          <input
            onChange={this.handleTitleChange()}
            type="text"
            autoFocus value={this.state.title}
            />
        </form>
      );
    } else {
      playlistTitle = <h1>{playlist.title}</h1>;
    }

    return (
      <div className="playlist-display">
        <div className="album-cover">
          <img
            src={src}
            />
          <div className="playlist-cover-select">
            <i
              onClick={playPlaylist}
              className="fa fa-play-circle-o"
              aria-hidden="true"></i>
          </div>
        </div>
        <div className="playlist-info">
          <div>
            <div className="playlist-title">
              { playlistTitle }
              { editButton }
            </div>
            <h2>
              <span>By </span>
              <Link to={`/user/${userId}`}>
                {playlistOwnerName}
              </Link>
            </h2>
            {songNumber}
          </div>
          <div className="buttons">
            <button
              onClick={playPlaylist}
              className="typ-btn green-btn">
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
