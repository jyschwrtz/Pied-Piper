import { connect } from 'react-redux';
import Playlist from './playlist';
import {
  requestPlaylist,
  requestPlaylists,
  updatePlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';
import { requestSongs } from '../../actions/song_actions';
import {
  play,
  upNext,
  pastSongsInPlaylists
} from '../../actions/player_actions';
import { selectPlaylistSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;
  const playlist = state.entities.playlists[playlistId];
  let owner;
  if (playlist) {
    owner = state.entities.users[playlist.owner_id];
  }
  return({
    playlist,
    songs: selectPlaylistSongs(state, playlistId),
    owner,
    playing: state.ui.playing,
  });
};

const mapDispatchToProps = dispatch => ({
  requestSongs: () => dispatch(requestSongs()),
  requestPlaylists: () => dispatch(requestPlaylists()),
  requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId)),
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  play: () => dispatch(play()),
  upNext: (songs, playlist) => dispatch(upNext(songs, playlist)),
  pastSongsInPlaylists: (songs, playlist) => dispatch(pastSongsInPlaylists(songs, playlist)),
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
