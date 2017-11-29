import React from 'react';
import BrowseItem from './browse_item';
import NavBar from '../nav_bar/nav_bar';

class Browse extends React.Component {

  render() {
    const navTitles =
      ["Featured", "Genres & Moods", "New Releases", "Discover"];
    return(
      <div className="browse">
        <NavBar navTitles={navTitles} page="browse"/>
        <div className="browse-items">
          <BrowseItem title="Cool And Collected" playlistIds={[3, 4, 5, 9]}/>
          <BrowseItem title="Afternoon Study" playlistIds={[8, 1, 3, 6]}/>
          <BrowseItem title="Weekend Jammin'" playlistIds={[9, 6, 7, 2]}/>
        </div>
      </div>
    );
  }
}

export default Browse;
