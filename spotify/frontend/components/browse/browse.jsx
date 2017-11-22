import React from 'react';

class Browse extends React.Component {


  render() {
    return(
      <div>
        <h1>Browse</h1>
        <h2>Welcome, {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Browse;
