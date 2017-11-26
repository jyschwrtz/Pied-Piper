import React from 'react';
import BrowseItem from './browse_item';
import NavBar from '../nav_bar/nav_bar';

class Browse extends React.Component {

  componentDidMount() {
    // this.props.requestSongs();
    // this.props.requestPlaylists();
    // console.log("BROWSE");
  }

  render() {
    return(
      <div className="browse">
        <NavBar />
        <div className="browse-items">
          <BrowseItem title="Thanksgiving Weekend"/>
          <BrowseItem title="Jamendo" />
          <BrowseItem title="Weekend Jammin'" />
        </div>
      </div>
    );
  }
}

export default Browse;
