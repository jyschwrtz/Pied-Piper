import React from 'react';
import { Link } from 'react-router-dom';

class BrowseIndexItem extends React.Component {

  playPlaylist(e) {
    e.preventDefault();
    this.props.upNext(this.props.songs);
    if (!this.props.playing) {
      this.props.play();
    }
  }

  render() {
    const { playlist, currentUser } = this.props;
    let content;
    if (playlist) {
      content = (
       <div className='browse-index-item'>
         <Link to={`/user/${currentUser.id}/playlist/${playlist.id}`} >
           <div className="album-cover">
             <img src={playlist.image_url}/>
             <div className="playlist-cover-select">
               <i className="fa fa-play-circle-o" aria-hidden="true"></i>
             </div>
           </div>
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

export default BrowseIndexItem;
