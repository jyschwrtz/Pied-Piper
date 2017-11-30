import { connect } from 'react-redux';

import CollectionPlaylists from './collection_playlists';
import { createPlaylist, requestPlaylists } from '../../actions/playlist_actions';
import { selectUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  return({
    playlists
  });
};

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  requestPlaylists: () => dispatch(requestPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPlaylists);
