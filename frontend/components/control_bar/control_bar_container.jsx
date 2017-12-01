import { connect } from 'react-redux';
import { requestSong } from '../../actions/song_actions';
import ControlBar from './control_bar';
import { play, nextSong } from '../../actions/player_actions';

const mapStateToProps = state => {
  let artist;
  if (state.ui.currentSong) {
    artist = state.entities.users[state.ui.currentSong.artist_id];
  }
  return({
    currentSong: state.ui.currentSong,
    currentUser: state.session.currentUser,
    currentPlaylist: state.ui.currentPlaylist,
    artist,
    playing: state.ui.playing,
    shuffling: state.ui.shuffling,
    looping: state.ui.looping,
    volumeLevel: state.ui.volumeLevel,
  });
};

const mapDispatchToProps = dispatch => ({
  requestSong: songId => dispatch(requestSong(songId)),
  play: () => dispatch(play()),
  nextSong: () => dispatch(nextSong()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);
