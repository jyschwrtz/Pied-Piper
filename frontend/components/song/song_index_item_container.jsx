import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { receiveCurrentSong } from '../../actions/song_actions';
import { play, nextSong, upNext } from '../../actions/player_actions';

const mapStateToProps = state => ({
  currentSong: state.ui.currentSong,
  playing: state.ui.playing,
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: currentSong => dispatch(receiveCurrentSong(currentSong)),
  play: () => dispatch(play()),
  nextSong: () => dispatch(nextSong()),
  upNext: (songs) => dispatch(upNext(songs)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
