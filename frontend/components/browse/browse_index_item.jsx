import React from 'react';
import { Link } from 'react-router-dom';

class BrowseIndex extends React.Component {

  render() {
    const { playlist } = this.props;
    let content;
    if (playlist) {
      content = (
       <div className='browse-index-item'>
         <Link to={`/user/1/playlist/${playlist.id}`} >
           <img src={playlist.image_url}/>
           <p>{playlist.title}</p>
         </Link>
       </div>
     );
    }

    return(
      <div>
        {content}
      </div>
    );
  }
}

export default BrowseIndex;
