import React from 'react';
import BrowseIndexContainer from './browse_index_container';

export default (props) => {
  const { title } = props;
  return (
    <div className="browse-item">
      <h1>{title}</h1>
      <BrowseIndexContainer />
      <div className="view-more">
        <a>VIEW MORE</a>
      </div>
    </div>
  );
};
