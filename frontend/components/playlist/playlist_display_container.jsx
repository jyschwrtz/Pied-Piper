import { connect } from 'react-redux';
import PlaylistDisplay from './playlist_display';
import {
  updatePlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDisplay);
