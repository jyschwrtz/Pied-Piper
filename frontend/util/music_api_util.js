export const searchDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches',
    data: { search: { query }}
  });
};

export const songsByPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches/songs_by_playlist',
    data: { search: { playlist_id: playlistId }},
  });
};

export const songsByArtist = (artistId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches/songs_by_artist',
    data: { search: { artist_id: artistId }},
  });
};
