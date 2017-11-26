import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import PlayerControls from './player_controls';

const mapStateToProps = state => {
  return({
    currentSong: state.session.currentSong
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerControls);
