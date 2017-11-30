import { connect } from 'react-redux';
import { upNext, play } from '../../actions/player_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

import BrowseIndexItem from './browse_index_item';

const mapStateToProps = (state, newProps) => {

  return ({
    currentUser: state.session.currentUser,
    songs: selectPlaylistSongs(state, newProps.playlistId),
    playing: state.ui.playing,
  });
};

const mapDispatchToProps = dispatch => ({
  upNext: (songs) => dispatch(upNext(songs)),
  play: () => dispatch(play()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseIndexItem);
