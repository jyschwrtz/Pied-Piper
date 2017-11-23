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
  validates :genre, inclusion: %w(pop rock country christian rap hip_hop
                                  jazz folk reggae classical soundtrack)

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id

end
