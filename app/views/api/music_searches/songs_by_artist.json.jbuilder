@songs.each do |song|
  json.partial! 'api/songs/song.json.jbuilder', song: song
end
