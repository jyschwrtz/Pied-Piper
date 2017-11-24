import React from 'react';

class NavBar extends React.Component {

  render() {
    return(
      <div className="navbar">
        <ul>
          <li><a href='#'>Featured</a></li>
          <li><a href='#'>Genres & Moods</a></li>
          <li><a href='#'>New Releases</a></li>
          <li><a href='#'>Discover</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
