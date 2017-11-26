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
          <BrowseItem title="Thanksgiving Weekend" playlistIds={[3, 4, 5]}/>
          <BrowseItem title="Afternoon Study" playlistIds={[1, 2, 3]}/>
          <BrowseItem title="Weekend Jammin'" playlistIds={[5, 6, 7]}/>
        </div>
      </div>
    );
  }
}

export default Browse;
