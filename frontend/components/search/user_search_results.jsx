import React from 'react';

export default (props) => {
  const { users } = props;
  let content;
  if (users && users.length > 0) {
    content =
    <div>
      <h1>Users:</h1>
      {
        users.map(result => (
          <li key={result.id}>{result.username}</li>
        ))
      }
    </div>;
  }
  return(
    <div className="user-search-results">
      { content }
    </div>
  );
};
