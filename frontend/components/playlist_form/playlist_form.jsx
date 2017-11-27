import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let playlist = this.state;
    this.props.createPlaylist(playlist);
    this.props.togglePlaylistForm();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { togglePlaylistForm } = this.props;
    const { title } = this.state;
    console.log(title);
    return(
      <div className="playlist-form">
        <button
          className="playlist-form-x"
          onClick={togglePlaylistForm}>
          X
        </button>
        <h1>Create new playlist</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input">
            <label>Playlist Name
              <input
                type="text"
                onChange={this.handleInput("title")}
                className="title"
                value={title}
                placeholder="Start typing..." />
            </label>
          </div>
          <div className="buttons">
            <button
              className="playlist-form-cancel"
              onClick={togglePlaylistForm}>
              CANCEL
            </button>
            <button
              className="playlist-form-submit">
              <input
                type="submit"
                className="submit-btn"
                value="CREATE"/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
