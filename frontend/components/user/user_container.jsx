import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './user';
import {
  selectPlaylistSongs,
  selectUserPlaylists
} from '../../reducers/selectors';

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
  });
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
