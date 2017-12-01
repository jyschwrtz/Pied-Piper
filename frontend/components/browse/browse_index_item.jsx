import React from 'react';
import { Link } from 'react-router-dom';

class BrowseIndexItem extends React.Component {

  playPlaylist(e) {
    e.preventDefault();
    this.props.upNext(this.props.songs, this.props.playlist);
    if (!this.props.playing) {
      this.props.play();
    }
  }

  playPauseSong(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.play();
  }

  render() {
    const { playlist, currentUser, currentPlaylist, playing } = this.props;
    let playlistClass = "playlist-cover-select";
    let content;
    let noiseIcon = <i className="fa fa-play" aria-hidden="true"></i>;
    let action = this.playPlaylist.bind(this);
    let playPauseIcon = <i className="fa fa-play" aria-hidden="true"></i>;
    if (currentPlaylist
        && playlist
        && playlist.id === currentPlaylist.id) {
      playlistClass += " selected-playlist";
      action = this.playPauseSong.bind(this);
      if (playing) {
        playPauseIcon = <i className="fa fa-pause" aria-hidden="true"></i>;
        noiseIcon = <i className="fa fa-volume-up" aria-hidden="true"></i>;
      }
    }

    if (playlist) {
      let src = `https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/${playlist.image_url}`;
      content = (
       <div className='browse-index-item'>
         <Link to={`/user/${currentUser.id}/playlist/${playlist.id}`} >
           <div className="album-cover">
             <img src={src}/>
             <div className={playlistClass}>
               <div className="button-container">
                 <button
                   onClick={action}
                   className="play-playlist-btn">
                   <div className="play-pause-icon">
                     {playPauseIcon}
                   </div>
                   <div className="noise-icon">
                     {noiseIcon}
                   </div>
                 </button>
               </div>
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
