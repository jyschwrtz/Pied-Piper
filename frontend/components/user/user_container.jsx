import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './user';
import {
  selectPlaylistSongs,
  selectUserPlaylists
} from '../../reducers/selectors';
import { play, nextSong, upNext, pastSongsInPlaylists } from '../../actions/player_actions';


const mapStateToProps = (state, ownProps) => {
  const ownerId = parseInt(ownProps.match.params.userId);
  const playlists = selectUserPlaylists(state, ownerId);
  let allSongs = [];
  if (playlists.length > 0) {
    playlists.forEach(playlist => {
      allSongs = allSongs.concat(selectPlaylistSongs(state, playlist.id));
    });
  }
  let songs = [];
  allSongs.forEach(song => {
    if (!songs.includes(song)) {
      songs.push(song);
    }
  });
  return({
    user: state.entities.users[ownerId],
    playlists,
    songs,
    playing: state.ui.playing,
  });
};

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  upNext: (songs, playlist) => dispatch(upNext(songs, playlist)),
  pastSongsInPlaylists: (songs, playlist) => dispatch(pastSongsInPlaylists(songs, playlist)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
