# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  song_name  :string           not null
#  filename   :string           not null
#  length     :integer
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :song_name, :filename, :artist_id, presence: true

  belongs_to :artist,
    class_name: :User,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :playlist_songs,
    class_name: :PlaylistSong,
    primary_key: :id,
    foreign_key: :song_id

  has_many :playlists,
    through: :playlist_songs,
    source: :playlist

end
