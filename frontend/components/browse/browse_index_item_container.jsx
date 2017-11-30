import { connect } from 'react-redux';
import { upNext, play } from '../../actions/player_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

import BrowseIndexItem from './browse_index_item';

const mapStateToProps = (state, newProps) => {
  let songs;
  if (newProps.playlist) {
    songs =  selectPlaylistSongs(state, newProps.playlist.id);
  }

  return ({
    currentUser: state.session.currentUser,
    songs,
    playing: state.ui.playing,
  });
};

const mapDispatchToProps = dispatch => ({
  upNext: (songs, playlist) => dispatch(upNext(songs, playlist)),
  play: () => dispatch(play()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseIndexItem);
