import React from 'react';
import { NavLink, Route } from 'react-router-dom';

class SidebarNav extends React.Component {

  render() {
    return(
      <div className="sidebar-nav">
        <NavLink to="/browse/featured" >Home</NavLink>
        <NavLink to="/collection/playlists" >Your Music</NavLink>
      </div>
    );
  }
}

export default SidebarNav;
