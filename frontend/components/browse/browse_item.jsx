import React from 'react';
import BrowseIndex from './browse_index';

export default (props) => {
  return (
    <div className="browse-item">
      <h1>Thanksgiving Weekend</h1>
      <BrowseIndex />
      <div className="view-more">
        <a>VIEW MORE</a>
      </div>
    </div>
  );
};
