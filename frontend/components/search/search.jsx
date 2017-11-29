import React from 'react';
import SongSearchResults from './song_search_results';
import PlaylistSearchResults from './playlist_search_results';
import UserSearchResults from './user_search_results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => {
      this.setState({ searchInput: e.target.value });
      this.props.searchDatabase(e.target.value);
    };
  }

  render() {
    const { songSearch, userSearch, playlistSearch, currentUser } = this.props;
    const { searchInput } = this.state;

    return(
      <div className="search">
        <div className="search-bar">
          <h2>{"Search for an Artist, Song, or Playlist"}</h2>
          <input
            type="text"
            onChange={this.handleChange()}
            value={searchInput}
            placeholder="Start typing..."
            />
        </div>
        
        <SongSearchResults songs={songSearch} />
        <PlaylistSearchResults
          playlists={playlistSearch}
          currentUser={currentUser} />
        <UserSearchResults users={userSearch} />
      </div>
    );
  }
}

export default Search;
