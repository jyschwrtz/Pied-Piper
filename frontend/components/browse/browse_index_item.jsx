import React from 'react';
import { Link } from 'react-router-dom';

class BrowseIndex extends React.Component {

  render() {
    const { playlist, currentUser } = this.props;
    let content;
    if (playlist) {
      content = (
       <div className='browse-index-item'>
         <Link to={`/user/${currentUser.id}/playlist/${playlist.id}`} >
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
