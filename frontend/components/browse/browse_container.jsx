import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchSongs } from '../../actions/song_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

import Browse from './browse';

const mapStateToProps = state => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs),
  fetchPlaylists: () => dispatch(fetchPlaylists)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
