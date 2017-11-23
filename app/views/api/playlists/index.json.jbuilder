@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title
  end
end

# @playlists.each do |playlist|
#   json.partial! 'api/playlists/playlist.json.jbuilder', playlist: playlist
# end
