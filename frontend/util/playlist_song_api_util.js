export const createPlaylistSong = (songId, playlistId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/playlist_songs`,
    data: { playlist_song: {song_id: songId} }
  })
);

export const deletePlaylistSong = (songId, playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}/playlist_songs/${songId}`,
  })
);
