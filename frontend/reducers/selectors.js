// export const selectPlaylistSongs2 = (state, playlistId) => {
//   let playlistSongIds;
//   if (state.entities.playlists[playlistId]) {
//     playlistSongIds =
//     state.entities.playlists[playlistId].song_ids;
//   }
//   if (playlistSongIds) {
//     let songIdsInPlaylist = [];
//     const songIds = Object.keys(state.entities.songs);
//     songIds.forEach(songId => {
//       if (playlistSongIds.includes(parseInt(songId))) {
//         songIdsInPlaylist.push(songId);
//       }
//     });
//     let songsInPlaylist = [];
//     songIdsInPlaylist.forEach(songId => {
//       songsInPlaylist.push(state.entities.songs[songId]);
//     });
//     return songsInPlaylist;
//   }
// };

export const selectPlaylistSongs = (state, playlistId) => {
  let playlistSongIds;
  if (state.entities.playlists[playlistId]) {
    playlistSongIds =
    state.entities.playlists[playlistId].song_ids;
  }
  if (playlistSongIds) {
    return playlistSongIds.map(songId => (
      state.entities.songs[songId]
    ));
  }
};

export const selectUserPlaylists = (state, ownerId) => {
  let id;
  if (ownerId) {
    id = ownerId;
  } else {
    id = state.session.currentUser.id;
  }
  return Object.values(state.entities.playlists).filter(playlist => {
    return playlist.owner_id === id;
  });
};


// export const selectArtistsSongs = (state) => (
//
// )
