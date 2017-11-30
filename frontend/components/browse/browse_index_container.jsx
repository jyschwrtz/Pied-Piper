import { connect } from 'react-redux';
import { requestSongs } from '../../actions/song_actions';
import {
  requestPlaylists,
  requestPlaylist
} from '../../actions/playlist_actions';

import BrowseIndex from './browse_index';

const mapStateToProps = state => ({
  playlists: state.entities.playlists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestPlaylists: () => dispatch(requestPlaylists()),
  requestPlaylist: (playlistId) => dispatch(requestPlaylist(playlistId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseIndex);
