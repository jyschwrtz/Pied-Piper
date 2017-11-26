import React from 'react';
import { Link } from 'react-router-dom';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;
    return(
      <div className="user-account">
        <div className="user-account-top">
          <img src={currentUser.image_url} />
          <h1>{currentUser.username}</h1>
        </div>
        <div className="user-account-bottom">
          <Link to="/setting/account" >
            <button>
              VIEW ACCOUNT
            </button>
          </Link>
          <Link to="/setting/account" >
            <button>
              FULL WEBSITE
            </button>
          </Link>
          <Link to="/setting/account" >
            <button>
              HELP
            </button>
          </Link>
          <button
            onClick={logout}>
            LOG OUT
          </button>
        </div>
      </div>
    );
  }
}

export default UserAccount;
