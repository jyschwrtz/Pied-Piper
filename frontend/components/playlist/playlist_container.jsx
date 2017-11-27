import { connect } from 'react-redux';
import Playlist from './playlist';
import { requestPlaylist, requestPlaylists } from '../../actions/playlist_actions';
import { requestSongs } from '../../actions/song_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;
  const playlist = state.entities.playlists[playlistId];
  let owner;
  if (playlist) {
    owner = state.entities.users[playlist.owner_id];
  }
  console.log(owner);
  return({
    playlist,
    songs: selectPlaylistSongs(state, playlistId),
    owner
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
