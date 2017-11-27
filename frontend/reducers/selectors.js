export const selectPlaylistSongs = (state, playlistId) => {
  let playlistSongIds;
  if (state.entities.playlists[playlistId]) {
    playlistSongIds =
    state.entities.playlists[playlistId].song_ids;
  }
  if (playlistSongIds) {
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
  }
};

export const selectUserPlaylists = (state) => (
 Object.values(state.entities.playlists).filter(playlist => {
    return playlist.owner_id === state.session.currentUser.id;
  })
);
