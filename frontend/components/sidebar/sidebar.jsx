import React from 'react';
import Logo from '../logo/logo';
import { Link, NavLink } from 'react-router-dom';
import SidebarNav from './sidebar_nav';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  render() {
    const { currentUser } = this.props;
    let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/user_images/${currentUser.image_url}`;
    return(
      <div className="sidebar">
        <div className="sidebar-top">
          <Logo text="none" />
          <NavLink to="/search" className="sidebar-search">
            <div>
              <h2>Search</h2>
              <h2><i className="fa fa-search" aria-hidden="true"></i></h2>
            </div>
          </NavLink>
          <SidebarNav />
        </div>

          <NavLink
            to="/setting/account"
            className="user-account-link">
            <div className="sidebar-bottom">
              <img src={src} />
              <h2>{currentUser.username}</h2>
            </div>
          </NavLink>
        <button
          className="logout-btn"
          onClick={this.props.logout}
          >Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
