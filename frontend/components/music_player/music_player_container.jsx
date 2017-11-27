import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { requestPlaylists } from '../../actions/playlist_actions';
import { requestSongs } from '../../actions/song_actions';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestUsers: () => dispatch(requestUsers()),
  requestPlaylists: () => dispatch(requestPlaylists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer);
