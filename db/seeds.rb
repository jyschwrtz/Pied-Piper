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
  default_user_image =  "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/default_images/default-user-image.png"

  User.create!( # Demo User
    username: "demo_user",
    email: "demo@mail.com",
    password: "password",
    image_url: default_user_image
  )

  User.create!( # Admin User
    username: "Admin",
    email: "admin@mail.com",
    password: "password",
    image_url: default_user_image
  )

  jay = User.create!( # Jay
    username: "Jay",
    email: "jay@mail.com",
    password: "password",
    image_url: default_user_image
  )

  emily = User.create!(
    username: "Emily",
    email: "emily@mail.com",
    password: "password",
    image_url: default_user_image
  )

  #ARTISTS (USERS)
  melanie_ungar = User.create!(
    username: "Melanie Ungar",
    email: "melanie.ungar@mail.com",
    password: "password",
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/melanie_ungar.jpg"
  )

  ralph_castelli = User.create!(
    username: "Ralph Castelli",
    email: "ralph.castelli@mail.com",
    password: "password",
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/Ralph_Castello.jpg"
  )

  craze_24 = User.create!(
    username: "Craze 24",
    email: "craze.24@mail.com",
    password: "password",
    image_url: default_user_image
  )

  duo_teslar = User.create!(
    username: "Duo Teslar",
    email: "duo.teslar@mail.com",
    password: "password",
    image_url: default_user_image
  )

  the_dlx = User.create!(
    username: "The DLX",
    email: "dlx@mail.com",
    password: "password",
    image_url: default_user_image
  )

  wordsmith = User.create!(
    username: "Wordsmith",
    email: "wordsmith@mail.com",
    password: "password",
    image_url: default_user_image
  )

  # SONGS
  song1 = Song.create!(
    song_name: "The Statement",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Wordsmith_-_The_Statement.mp3",
    length: 171,
    artist_id: wordsmith.id
  )

  song2 = Song.create!(
    song_name: "Two Kids",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/THE_DLX_-_Two_Kids.mp3",
    length: 211,
    artist_id: the_dlx.id
  )

  song3 = Song.create!(
    song_name: "Crazy Glue",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Melanie_Ungar_-_Crazy_Glue.mp3",
    length: 220,
    artist_id: melanie_ungar.id
  )

  song4 = Song.create!(
    song_name: "Moments",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Ralph_Castelli_-_good_morning.mp3",
    length: 262,
    artist_id: ralph_castelli.id
  )

  song5 = Song.create!(
    song_name: "Rolling",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Craze_24_-_Rolling__Original_Clean_.mp3",
    length: 262,
    artist_id: craze_24.id
  )

  song6 = Song.create!(
    song_name: "Universal Funk",
    filename: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Music/Singles/Duo_Teslar_-_Universal_Funk.mp3",
    length: 252,
    artist_id: duo_teslar.id
  )


  # PLAYLISTS
  # default album cover:  https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/default_images/album_cover.jpeg
  playlist1 = Playlist.create!(
    title: "Saturday Afternoon",
    owner_id: jay.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/default_images/album_cover.jpeg",
    date: 2017,
    genre: nil
  )

  playlist2 = Playlist.create!(
    title: "Running!",
    owner_id: emily.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/default_images/album_cover.jpeg",
    date: 2017,
    genre: nil
  )

  playlist3 = Playlist.create!(
    title: "Crazy Glue - Single",
    owner_id: melanie_ungar.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/melanie_ungar.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist4 = Playlist.create!(
    title: "Good Morning - Single",
    owner_id: melanie_ungar.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/melanie_ungar.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist5 = Playlist.create!(
    title: "Rolling - Single",
    owner_id: craze_24.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/Rolling.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist6 = Playlist.create!(
    title: "Two Kids - Single",
    owner_id: the_dlx.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/Two_Kids.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist7 = Playlist.create!(
    title: "The Statement - Single",
    owner_id: wordsmith.id,
    image_url: "https://s3-us-west-1.amazonaws.com/pied-piper-spotify-clone/Images/album+covers/The_Statement.jpg",
    date: 2017,
    genre: "pop"
  )

  # PLAYLIST_SONGS (JOINS)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist2.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist2.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist3.id)
  PlaylistSong.create!(song_id: song4.id, playlist_id: playlist4.id)
  PlaylistSong.create!(song_id: song5.id, playlist_id: playlist5.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist6.id)

end
