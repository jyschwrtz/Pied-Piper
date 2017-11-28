import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import ControlBar from './control_bar';

const mapStateToProps = state => {
  let artist;
  if (state.ui.currentSong) {
    artist = state.entities.users[state.ui.currentSong.artist_id];
  }
  return({
    currentSong: state.ui.currentSong,
    artist,
    playing: state.ui.playing,
    shuffling: state.ui.shuffling,
    looping: state.ui.looping,
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);
