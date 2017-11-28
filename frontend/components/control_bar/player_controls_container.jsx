import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import { play } from '../../actions/player_actions';
import PlayerControls from './player_controls';

const mapStateToProps = state => {

  return({
    currentSong: state.session.currentSong,
    playing: state.ui.playing
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId)),
  play: () => dispatch(play())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerControls);
