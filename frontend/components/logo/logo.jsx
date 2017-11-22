import React from 'react';

export default (props) => {
  let src;
  if (props.color === "white") {
    src = "https://raw.githubusercontent.com/jyschwrtz/pied-piper-design-docs/d97210875e05c2c15fc336c2e7d3cbcb3550621c/logo/logo-white_text.png";
  } else if (props.color === "black") {
    src = "https://raw.githubusercontent.com/jyschwrtz/pied-piper-design-docs/master/logo/logo-black_text.png";
  }

  return (
    <img className="logo" src={src} />
  );
};
