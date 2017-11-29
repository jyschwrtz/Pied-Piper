import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';
import BrowseIndexItem from '../browse/browse_index_item';

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
    console.log(songSearch);
    let songResults, userResults, playlistResults;
    if (songSearch) {
      songResults =
      <div>
        <h1>Songs:</h1>
        {
          songSearch.map((song, idx) => (
            <SongIndexItemContainer
              key={song.id}
              song={song}
              idx={idx}
              />
          ))
        }
      </div>;
    }
    if (userSearch) {
      userResults =
      <div>
        <h1>Users:</h1>
        {
          userSearch.map(result => (
            <li key={result.id}>{result.username}</li>
          ))
        }
      </div>;
    }
    if (playlistSearch) {
      playlistResults =
      <div>
        <h1>Playlists:</h1>
        {
          playlistSearch.map(playlist => (
            <BrowseIndexItem
              key={playlist.id}
              playlistId={playlist.id}
              playlist={playlist}

              currentUser={currentUser}/>
          ))
        }
      </div>;
    }

    return(
      <div className="search">
        <input
          type="text"
          onChange={this.handleChange()}
          value={searchInput}
          paceholder="Search..."
          />
        { songResults }
        { playlistResults }
        { userResults }
      </div>
    );
  }
}

export default Search;
