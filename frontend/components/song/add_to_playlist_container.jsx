import { connect } from 'react-redux';
import AddToPlaylist from './add_to_playlist';
import { selectUserPlaylists } from '../../reducers/selectors';
import { createPlaylistSong } from '../../actions/playlist_song_actions';

const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  return({
    playlists
  });
};

const mapDispatchToProps = dispatch => ({
  createPlaylistSong: (songId, playlistId) => (
    dispatch(createPlaylistSong(songId, playlistId))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToPlaylist);
