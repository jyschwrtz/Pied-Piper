export const fetchUsers = () => (
  $.ajax({
    url: 'api/users',
    method: 'GET',
  })
);
