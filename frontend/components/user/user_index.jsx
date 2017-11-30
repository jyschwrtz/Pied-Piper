import React from 'react';

import UserIndexItem from './user_index_item';

export default (props) => {
  return(
    <ul className="user-index">
      {
        props.users.map(user => (
        <UserIndexItem
          key={user.id}
          user={user} />
        ))
      }
    </ul>
  );
};
