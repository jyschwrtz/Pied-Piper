class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.string :image_url
      t.integer :owner_id, null: false
      t.integer :date
      t.string :genre

      t.timestamps
    end
    add_index :playlists, :title, unique: true
    add_index :playlists, :owner_id
  end
end
