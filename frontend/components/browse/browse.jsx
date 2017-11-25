import React from 'react';
import BrowseItem from './browse_item';
import NavBar from '../nav_bar/nav_bar';

class Browse extends React.Component {

  // componentDidMount() {
  //   this.props.requestSongs();
  //   this.props.requestPlaylists();
  //   console.log("Here");
  // }

  render() {
    return(
      <div className="browse">
        <NavBar />
        <div className="browse-items">
          <BrowseItem />
          <BrowseItem />
          <BrowseItem />
        </div>
      </div>
    );
  }
}

export default Browse;
