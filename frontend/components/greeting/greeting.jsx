import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-left">
          <h1>Spotify</h1>
          <button className="splash-signup">
            <Link to='/signup'>SIGN UP</Link>
          </button>
          <h2>ALREADY HAVE AN ACCOUNT?</h2>
          <button className="splash-login">
            <Link to='/login'>LOG IN</Link>
          </button>
        </div>
        <div className="splash-right">
          <h1>Get the right music,</h1>
          <h1>right now</h1>
          <h3>Listen to millions of songs for free.</h3>
          <ul>
            <li>Search & discover music you'll love</li>
            <li>Create playlists of your favorite music</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
