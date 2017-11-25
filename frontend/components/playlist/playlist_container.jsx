import { connect } from 'react-redux';
import Playlist from './playlist';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return({
    playlist: state.entities.playlists[ownProps.playlistId],
    songs: selectPlaylistSongs(state, ownProps.playlistId)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
