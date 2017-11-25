import React from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import SidebarNav from './sidebar_nav';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-top">
          <Logo text="none" />
          <Link to="/search" className="sidebar-search">
            <div>
              <h2>Search</h2>
              <h2><i className="fa fa-search" aria-hidden="true"></i></h2>
            </div>
          </Link>
          <SidebarNav />
        </div>

        <div className="sidebar-top">
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button
            className="logout-btn"
            onClick={this.props.logout}
            >Log Out</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
