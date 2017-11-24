import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div className="sidebar">
        <h1>Sidebar</h1>
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
