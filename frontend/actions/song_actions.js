import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveCurrentSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

export const requestSongs = (data) => dispatch => (
  SongAPIUtil.fetchSongs(data)
    .then(
      songs => dispatch(receiveSongs(songs))
    )
);

export const requestSong = (songId) => dispatch => (
  SongAPIUtil.fetchSong(songId)
    .then(
      song => dispatch(receiveSong(song))
    )
);
