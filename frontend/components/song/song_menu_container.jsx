import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongMenu from './song_menu';
import {
  createPlaylistSong,
  deletePlaylistSong
} from '../../actions/playlist_song_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPlaylistSong: (songId, playlistId) => (
    dispatch(createPlaylistSong(songId, playlistId))
  ),
  deletePlaylistSong: (songId, playlistId) => (
    dispatch(deletePlaylistSong(songId, playlistId))
  ),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongMenu));
