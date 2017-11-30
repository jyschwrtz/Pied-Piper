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
      let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
      content = (
       <div className='browse-index-item'>
         <Link to={`/user/${currentUser.id}/playlist/${playlist.id}`} >
           <div className="album-cover">
             <img src={src}/>
             <div className="playlist-cover-select">
               <i
                 onClick={this.playPlaylist.bind(this)}
                 className="fa fa-play-circle-o" aria-hidden="true"></i>
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
