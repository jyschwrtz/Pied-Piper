import { connect } from 'react-redux';

import Collection from './collection';
import { createPlaylist } from '../../actions/playlist_actions';
import { selectUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  return({
    playlists
  });
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist =>
    dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
