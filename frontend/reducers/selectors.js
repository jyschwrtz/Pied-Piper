export const selectPlaylistSongs = (state, playlistId) => {
  const playlistSongIds =
    state.entities.playlists[playlistId].song_ids;
  const allSongs = Object.values(state.entities.songs).filter(song => {
    playlistSongIds.includes(song.id);
  });
};
