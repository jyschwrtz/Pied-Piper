import React from 'react';
import UserIndex from '../user/user_index';

export default (props) => {
  const { artists } = props;
  let content;
  if (artists.length > 0 && artists[0]) {
    content = <UserIndex users={artists} />;
  }
  return(
    <div className="collection-artists">
      { content }
    </div>
  );
};
