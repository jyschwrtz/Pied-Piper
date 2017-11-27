class AddDefaultAlbumCoverToPlaylists < ActiveRecord::Migration[5.1]
  def change
    change_column_default :playlists, :image_url, "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/default_images/album_cover.png"
  end
end
