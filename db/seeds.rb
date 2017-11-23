# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do

  User.destroy_all
  Song.destroy_all
  Playlist.destroy_all

  # USERS
  User.create!( # Demo User
    username: "demo_user",
    email: "demo@mail.com",
    password: "password"
  )

  User.create!( # Admin User
    username: "Admin",
    email: "admin@mail.com",
    password: "password"
  )

  jay = User.create!( # Jay
    username: "Jay",
    email: "jay@mail.com",
    password: "password"
  )

  emily = User.create!(
    username: "Emily",
    email: "emily@mail.com",
    password: "password"
  )

  switchfoot = User.create!(
    username: "Switchfoot",
    email: "switchfoot@mail.com",
    password: "password"
  )

  # SONGS
  song1 = Song.create!(
    song_name: "Meant To Live",
    filename: "abcd",
    length: 204,
    artist_id: switchfoot.id
  )

  song2 = Song.create!(
    song_name: "24",
    filename: "abcde",
    length: 223,
    artist_id: switchfoot.id
  )

  #PLAYLISTS
  Playlist.create!(
    title: "Saturday Afternoon",
    owner_id: jay.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/album_cover.jpeg",
    date: 2017,
    genre: nil
  )

  Playlist.create!(
    title: "Running!",
    owner_id: emily.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/album_cover.jpeg",
    date: 2017,
    genre: nil
  )

end
