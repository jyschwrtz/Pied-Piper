import React from 'react';
import { Link } from 'react-router-dom';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;
    let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/user_images/${currentUser.image_url}`;
    return(
      <div className="user-account">
        <div className="user-account-top">
          <img src={src} />
          <h1>{currentUser.username}</h1>
        </div>
        <div className="user-account-bottom">
          <a
            target="_blank"
            href="https://github.com/jyschwrtz/Pied-Piper" >
            <button>
              VIEW CODE ON GITHUB
            </button>
          </a>
          <a
            target="_blank"
            href="https://github.com/jyschwrtz" >
            <button>
              GITHUB PROFILE
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jay-schwartz/" >
            <button>
              LINKED IN PROFILE
            </button>
          </a>
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
