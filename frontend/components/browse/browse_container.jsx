import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { requestSongs } from '../../actions/song_actions';
import { requestPlaylists } from '../../actions/playlist_actions';

import Browse from './browse';

const mapStateToProps = state => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestPlaylists: () => dispatch(requestPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
