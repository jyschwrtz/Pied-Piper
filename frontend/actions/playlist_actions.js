import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const requestPlaylists = () => dispatch => (
  PlaylistAPIUtil.fetchPlaylists()
    .then(
      playlists => dispatch(receivePlaylists(playlists))
    )
);

export const requestPlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.fetchPlaylist(playlistId)
    .then(
      playlist => dispatch(receivePlaylist(playlist))
    )
);

export const createPlaylist = playlist => dispatch => (
  PlaylistAPIUtil.createPlaylist(playlist)
    .then(
      playlistResponse => dispatch(receivePlaylist(playlistResponse))
    )
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistAPIUtil.updatePlaylist(playlist)
    .then(
      playlistResponse => dispatch(receivePlaylist(playlistResponse))
    )
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.deletePlaylist(playlistId)
    .then(
      () => dispatch(removePlaylist(playlistId))
    )
);
