export const createPlaylistSong = (playlistSong) => (
  $.ajax({
    method: 'POST',
    url: `api/playlists/${playlistSong.playlistId}/playlist_songs`,
    data: { playlist_song: {song_id: playlistSong.songId} }
  })
);

export const deletePlaylistSong = (playlistSong) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistSong.playlistId}/playlist_songs/${playlistSong.id}`,
  })
);
