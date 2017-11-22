class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.string :filename, null: false
      t.integer :length
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :songs, :song_name, unique: true
    add_index :songs, :artist_id
  end
end
