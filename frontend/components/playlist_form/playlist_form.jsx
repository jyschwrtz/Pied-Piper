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
    this.setState({ title: "" });
    this.props.togglePlaylistForm(e);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { togglePlaylistForm } = this.props;
    const { title } = this.state;
    return(
      <div className="playlist-form">
        <button
          className="playlist-form-x"
          type="button"
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
              className="typ-btn black-btn"
              type="button"
              onClick={togglePlaylistForm}>
              CANCEL
            </button>
            <button
              type="submit"
              className="typ-btn green-btn">
              CREATE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
