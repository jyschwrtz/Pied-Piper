import { connect } from 'react-redux';
import Playlist from './playlist';
import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';
import { requestSongs } from '../../actions/song_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;
  return({
    playlist: state.entities.playlists[playlistId],
    songs: selectPlaylistSongs(state, playlistId)
  });
};

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestPlaylists: () => dispatch(requestPlaylists()),
  requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
