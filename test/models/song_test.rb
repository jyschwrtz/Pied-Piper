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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
