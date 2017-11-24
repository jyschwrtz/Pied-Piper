import React from 'react';
import { NavLink, Route } from 'react-router-dom';

class SidebarNav extends React.Component {

  render() {
    return(
      <div className="sidebar-nav">
        <NavLink to="/browse" >Home</NavLink>
        <NavLink to="/collection" >Your Music</NavLink>
      </div>
    );
  }
}

export default SidebarNav;
