export const fetchSongs = data => (
  $.ajax({
    method: 'GET',
    url: 'api/songs',
    data
  })
);

export const fetchSong = songId => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`,
  })
);
