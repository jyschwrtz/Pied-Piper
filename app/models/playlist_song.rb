# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ApplicationRecord
  validates :song_id, :playlist_id, presence: true
  validates :playlist_id, uniqueness: { scope: :song_id }

  belongs_to :song,
    class_name: :Song,
    primary_key: :id,
    foreign_key: :song_id

  belongs_to :playlist,
    class_name: :Playlist,
    primary_key: :id,
    foreign_key: :playlist_id

end
