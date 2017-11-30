import React from 'react';
import BrowseItem from './browse_item';
import { withRouter } from 'react-router-dom';

class BrowseItems extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { title: "Cool And Collected", playlistIds: [3, 4, 5, 9] },
      { title: "Afternoon Study", playlistIds: [8, 1, 3, 6] },
      { title: "Weekend Jammin'", playlistIds: [9, 6, 7, 2] },
    ];
  }

  componentWillReceiveProps(newProps) {
    switch(newProps.location.pathname) {
      case "/browse/featured":
        this.items = [
          { title: "Cool And Collected", playlistIds: [3, 4, 5, 9] },
          { title: "Afternoon Study", playlistIds: [8, 1, 3, 6] },
          { title: "Weekend Jammin'", playlistIds: [9, 6, 7, 2] },
        ];
        break;
      case "/browse/genres_&_moods":
        this.items = [
          { title: "Workout", playlistIds: [10, 2, 1, 4] },
          { title: "Chill", playlistIds: [9, 6, 7, 8] },
          { title: "Party", playlistIds: [2, 5, 1, 10] },
        ];
        break;
      case "/browse/new_releases":
        this.items = [
          { title: "The Best New Releases", playlistIds: [8, 1, 3, 6] },
          { title: "New Playlists and Singles", playlistIds: [3, 4, 5, 9] },
        ];
        break;
      case "/browse/discover":
        this.items = [
          { title: "Playlists For You", playlistIds: [2, 5, 1, 10] },
          { title: "Top Recommendations For You", playlistIds: [9, 6, 7, 8] },
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
