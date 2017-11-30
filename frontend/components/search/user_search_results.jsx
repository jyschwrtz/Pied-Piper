import React from 'react';
import UserIndex from '../user/user_index';

export default (props) => {
  const { users } = props;
  let content;
  if (users && users.length > 0) {
    content =
    <div className="user-search-results">
      <h1>Users</h1>
      <UserIndex users={users} />
    </div>;
  }
  return(
    <div>
      { content }
    </div>
  );
};
