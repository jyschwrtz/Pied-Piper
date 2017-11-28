@songs.each do |song|
  json.set! song.id do
    json.set! :type, 'song'
    json.partial! 'api/songs/song', song: song
  end
end

@playlists.each do |playlist|
  json.set! playlist.id do
    json.set! :type, 'playlist'
    json.partial! 'api/playlists/playlist', playlist: playlist
  end
end

@users.each do |user|
  json.set! user.id do
    json.set! :type, 'user'
    json.partial! 'api/users/user', user: user 
  end
end
