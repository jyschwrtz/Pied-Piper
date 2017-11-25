import React from 'react';
import BrowseItem from './browse_item';
import NavBar from '../nav_bar/nav_bar';

class Browse extends React.Component {

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

  render() {
    return(
      <div className="browse">
        <NavBar />
        <BrowseItem />
        <BrowseItem />
        <BrowseItem />
      </div>
    );
  }
}

export default Browse;
