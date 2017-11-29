@songs.each do |song|
  json.set! 'song' do
    json.partial! 'api/songs/song', song: song
  end
end

@playlists.each do |playlist|
  json.set! 'playlist' do
    json.partial! 'api/playlists/playlist', playlist: playlist
  end
end
#
@users.each do |user|
  json.set! 'user' do
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end
