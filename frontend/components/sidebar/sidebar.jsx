import React from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div className="sidebar">
        <Logo text="none" />
        <Link to="/search" className="sidebar-search">
          <div>
              <h2>Search</h2>
              <h2>(S)</h2>
          </div>
        </Link>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button
          className="logout-btn"
          onClick={this.props.logout}
          >Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
