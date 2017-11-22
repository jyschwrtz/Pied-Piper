import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    <div className="splash">
      <h1>Spotify</h1>
      <button>
        <Link to='/signup'>Sign Up</Link>
      </button>
      <button>
        <Link to='/login'>Log In</Link>
      </button>
    </div>
  );
};
