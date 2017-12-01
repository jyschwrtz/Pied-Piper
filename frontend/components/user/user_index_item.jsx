import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { user } = props;
  let content;
  if (user) {
    const src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/user_images/${user.image_url}`;
    content = (
      <Link to={`/user/${user.id}`}>
        <div className="user-photo">
          <img src={src}/>
          <p>{user.username}</p>
        </div>
      </Link>
    );
  }
  return (
    <div className="user-index-item">
      { content }
    </div>
  );
};
