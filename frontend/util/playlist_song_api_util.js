export const createPlaylistSong = (songId, playlistId) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistId}/playlist_songs`,
    data: { playlist_song: {song_id: songId} }
  })
);

export const deletePlaylistSong = (playlistSong) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistSong.playlistId}/playlist_songs/${playlistSong.id}`,
  })
);
