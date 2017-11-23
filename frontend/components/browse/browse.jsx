import React from 'react';

class Browse extends React.Component {

  render() {
    return(
      <div className="browse">
        <h1>Browse</h1>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button
          className="logout-btn"
          onClick={this.props.logout}
          >Log Out</button>
      </div>
    );
  }
}

export default Browse;
