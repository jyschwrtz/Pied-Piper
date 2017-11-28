import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import { play, previousSong, nextSong } from '../../actions/player_actions';
import PlayerControls from './player_controls';

const mapStateToProps = state => {

  return({
    currentSong: state.ui.currentSong,
    playing: state.ui.playing
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId)),
  play: () => dispatch(play()),
  previousSong: () => dispatch(previousSong()),
  nextSong: () => dispatch(nextSong()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerControls);
