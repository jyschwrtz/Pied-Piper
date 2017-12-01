import React from 'react';
import BrowseItem from '../browse/browse_item';

class CollectionDailyMix extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { title: "", playlistIds: [2, 1, 10, 11] },
    ];
  }

  render() {
    return(
      <div className="collection-daily-mix">
        <p>{"Play the music you love, without the effort"}</p>
        {
          this.items.map((browseItem, idx) => (
            <BrowseItem
              key={idx}
              title={browseItem.title}
              playlistIds={browseItem.playlistIds}/>
          ))
        }
      </div>
    );

  }
}

export default CollectionDailyMix;
