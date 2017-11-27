import { connect } from 'react-redux';

import Collection from './collection';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => {

  return({
    playlists: state.entities.playlists
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
