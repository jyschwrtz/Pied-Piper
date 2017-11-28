import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import { play, previousSong, nextSong, loop, shuffle } from '../../actions/player_actions';
import PlayerControls from './player_controls';

const mapStateToProps = state => {

  return({
    currentSong: state.ui.currentSong,
    playing: state.ui.playing,
    shuffling: state.ui.shuffling,
    looping: state.ui.looping,
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId)),
  play: () => dispatch(play()),
  previousSong: () => dispatch(previousSong()),
  nextSong: () => dispatch(nextSong()),
  loop: () => dispatch(loop()),
  shuffle: () => dispatch(shuffle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerControls);
