import React from 'react';
import BrowseItem from './browse_item';
import { withRouter } from 'react-router-dom';

class BrowseItems extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { title: "Cool And Collected", playlistIds: [18, 14, 20, 16] },
      { title: "Afternoon Study", playlistIds: [8, 17, 3, 5] },
      { title: "Weekend Jammin'", playlistIds: [4, 6, 7, 1] },
    ];
  }

  componentWillReceiveProps(newProps) {
    switch(newProps.location.pathname) {
      case "/browse/featured":
        this.items = [
          { title: "Cool And Collected", playlistIds: [18, 14, 20, 16] },
          { title: "Afternoon Study", playlistIds: [8, 17, 3, 5] },
          { title: "Weekend Jammin'", playlistIds: [4, 6, 7, 1] },
        ];
        break;
      case "/browse/genres_&_moods":
        this.items = [
          { title: "Workout", playlistIds: [10, 2, 19, 4] },
          { title: "Chill", playlistIds: [9, 16, 7, 8] },
          { title: "Party", playlistIds: [12, 5, 11, 10] },
        ];
        break;
      case "/browse/new_releases":
        this.items = [
          { title: "The Best New Releases", playlistIds: [8, 11, 3, 16] },
          { title: "New Playlists and Singles", playlistIds: [3, 14, 5, 9] },
        ];
        break;
      case "/browse/discover":
        this.items = [
          { title: "Playlists For You", playlistIds: [12, 5, 11, 10] },
          { title: "Top Recommendations For You", playlistIds: [9, 16, 7, 18] },
        ];
        break;
    }
  }

  render() {
    return (
      <div className="browse-items">
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

export default withRouter(BrowseItems);
