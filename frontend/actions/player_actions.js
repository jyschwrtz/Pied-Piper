export const PLAY = 'PLAY';
export const PREVIOUS_SONG = 'PREVIOUS_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const UP_NEXT = 'UP_NEXT';

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
