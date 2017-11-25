export const selectPlaylistSongs = (state, playlistId) => {
  const playlistSongIds =
    state.entities.playlists[playlistId].song_ids;
  let songIdsInPlaylist = [];
  const songIds = Object.keys(state.entities.songs);
  songIds.forEach(songId => {
      if (playlistSongIds.includes(parseInt(songId))) {
        songIdsInPlaylist.push(songId);
      }
    });
  let songsInPlaylist = [];
  songIdsInPlaylist.forEach(songId => {
    songsInPlaylist.push(state.entities.songs[songId]);
  });
  return songsInPlaylist;
};
