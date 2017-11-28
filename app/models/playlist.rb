# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string
#  owner_id   :integer          not null
#  date       :integer
#  genre      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :title, :owner_id, presence: true
  validates :title, uniqueness: true
  validates :genre, allow_nil: true, inclusion: %w(pop rock country christian rap hip_hop
                                  jazz folk reggae classical soundtrack)

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id

  has_many :playlist_songs,
    class_name: :PlaylistSong,
    primary_key: :id,
    foreign_key: :playlist_id,
    dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song

  def self.top_five_results(query_param)
    param = "%#{query_param.downcase}%"
    Playlist.where('lower(title) LIKE ?', param).limit(5)
  end

end
