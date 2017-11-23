@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :song_name, :filename, :length, :artist_id
  end
end
