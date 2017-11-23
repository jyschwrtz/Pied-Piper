@playlists.each do |playlist|
  json.partial! 'api/playlists/playlist.json.jbuilder', playlist: playlist
end
