import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return(
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/browse/featured">
              Featured
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse/genres_moods">
              Genres & Moods
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse/new_releases">
              New Releases
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse/discover">
              Discover
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
