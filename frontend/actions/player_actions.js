export const PLAY = 'PLAY';
export const PREVIOUS_SONG = 'PREVIOUS_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const UP_NEXT = 'UP_NEXT';
export const PAST_SONGS_IN_PLAYLIST = 'PAST_SONGS_IN_PLAYLIST';
export const SHUFFLE = 'SHUFFLE';
export const LOOP = 'LOOP';
export const VOLUME = 'VOLUME';

export const play = () => ({
  type: PLAY
});

export const previousSong = () => ({
  type: PREVIOUS_SONG
});

export const nextSong = () => ({
  type: NEXT_SONG
});

export const upNext = (songs) => ({
  type: UP_NEXT,
  songs,
});

// WILL NOT WORK EXACTLY LIKE IT SHOULD
export const pastSongsInPlaylists = (songs) => ({
  type: PAST_SONGS_IN_PLAYLIST,
  songs,
});

export const shuffle = () => ({
  type: SHUFFLE
});

export const loop = () => ({
  type: LOOP
});

export const volume = (level) => ({
  type: VOLUME,
  level
});
