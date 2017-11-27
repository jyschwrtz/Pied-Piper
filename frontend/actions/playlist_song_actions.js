import * as PlaylistSongAPIUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
});

const removePlaylistSong = playlistSong => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSong
});

export const createPlaylistSong = (songId, playlistId) => dispatch => (
  PlaylistSongAPIUtil.createPlaylistSong(songId, playlistId)
    .then(playlistSong => dispatch(receivePlaylistSong(playlistSong)))
);

export const deletePlaylistSong = (songId, playlistId) => dispatch => (
  PlaylistSongAPIUtil.deletePlaylistSong(songId, playlistId)
    .then(playlistSong => dispatch(removePlaylistSong(playlistSong)))
);
// export const deletePlaylistSong = (songId, playlistId) => dispatch => (
//   PlaylistSongAPIUtil.deletePlaylistSong(songId, playlistId)
//     .then(playlistSong => dispatch(removePlaylistSong(playlistSong)))
// );
