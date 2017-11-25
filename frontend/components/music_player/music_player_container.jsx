import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { requestPlaylists } from '../../actions/playlist_actions';
import { requestSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestPlaylists: () => dispatch(requestPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer);
