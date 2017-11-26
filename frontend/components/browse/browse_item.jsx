import React from 'react';
import BrowseIndexContainer from './browse_index_container';

export default (props) => {
  const { title, playlistIds } = props;
  return (
    <div className="browse-item">
      <h1>{title}</h1>
      <BrowseIndexContainer playlistIds={playlistIds}/>
      <div className="view-more">
        <a>VIEW MORE</a>
      </div>
    </div>
  );
};
