import React from 'react';

export default (props) => {
  let src;
  if (props.text === "none") {
    src = "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/Logo/logo-tab.png"
  } else if (props.color === "white") {
    src = "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/Logo/logo-white_text.png";
  } else if (props.color === "black") {
    src = "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/Logo/logo-black_text.png";
  }

  return (
    <img className="logo" src={src} />
  );
};
