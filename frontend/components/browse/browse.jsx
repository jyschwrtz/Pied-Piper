import React from 'react';
import BrowseItems from './browse_items';
import NavBar from '../nav_bar/nav_bar';
import { Route, Switch } from 'react-router-dom';

class Browse extends React.Component {

  render() {
    const navTitles =
      ["Featured", "Genres & Moods", "New Releases", "Discover"];

    return(
      <div className="browse">
        <NavBar navTitles={navTitles} page="browse"/>
        <div className="browse-items">
          
          <BrowseItems />
        </div>
      </div>
    );
  }
}

export default Browse;
