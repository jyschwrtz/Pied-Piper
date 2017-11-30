import { connect } from 'react-redux';
import SongSearchResults from './song_search_results';
import { play, nextSong, upNext, pastSongsInPlaylists } from '../../actions/player_actions';

const mapStateToProps = state => ({
  currentSong: state.ui.currentSong,
  playing: state.ui.playing,
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  upNext: (songs, playlist) => dispatch(upNext(songs, playlist)),
  pastSongsInPlaylists: (songs, playlist) => dispatch(pastSongsInPlaylists(songs, playlist)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongSearchResults);
