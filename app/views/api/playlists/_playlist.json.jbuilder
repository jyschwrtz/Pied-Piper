json.set! playlist.id do
  json.extract! playlist, :id, :title, :date, :genre, :image_url, :owner_id
  json.song_ids playlist.songs.pluck(:id)
end
