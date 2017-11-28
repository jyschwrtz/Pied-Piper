export const searchDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches',
    data: { search: { query }}
  });
};
