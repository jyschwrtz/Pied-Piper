import React from 'react';
import BrowseIndexItem from './browse_index_item';

export default (props) => {
  return(
    <ul className="browse-index">
      <BrowseIndexItem />
      <BrowseIndexItem />
      <BrowseIndexItem />
    </ul>
  );
};
