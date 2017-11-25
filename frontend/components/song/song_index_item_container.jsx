import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { receiveCurrentSong } from '../../actions/song_actions';

const mapStateToProps = state => ({
  currentSong: state.session.currentSong
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: currentSong => dispatch(receiveCurrentSong(currentSong))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
