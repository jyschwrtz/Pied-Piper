import React from 'react';
import BrowseItem from './browse_item';

class Browse extends React.Component {

  render() {
    return(
      <div className="browse">
        <BrowseItem />
        <BrowseItem />
        <BrowseItem />
      </div>
    );
  }
}

export default Browse;
