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
  default_user_image = "default-user-image.png"

  demo = User.create!( # Demo User
    username: "demo_user",
    email: "demo@mail.com",
    password: "password",
    image_url: "Jay.jpg"
  )

  pied_piper = User.create!( # Demo User
    username: "Pied Piper",
    email: "pp@mail.com",
    password: "password",
    image_url: default_user_image
  )

  jay = User.create!( # Jay
    username: "Jay",
    email: "jay@mail.com",
    password: "password1988PP",
    image_url: default_user_image
  )

  emily = User.create!(
    username: "Emily",
    email: "emily@mail.com",
    password: "password1988PP",
    image_url: "emily.jpg"
  )

  #ARTISTS (USERS)
  melanie_ungar = User.create!(
    username: "Melanie Ungar",
    email: "melanie.ungar@mail.com",
    password: "password1988PP",
    image_url: "melanie_ungar.jpg"
  )

  ralph_castelli = User.create!(
    username: "Ralph Castelli",
    email: "ralph.castelli@mail.com",
    password: "password1988PP",
    image_url: "Ralph_Castello.jpg"
  )

  craze_24 = User.create!(
    username: "Craze 24",
    email: "craze.24@mail.com",
    password: "password1988PP",
    image_url: "craze24.jpg"
  )

  duo_teslar = User.create!(
    username: "Duo Teslar",
    email: "duo.teslar@mail.com",
    password: "password1988PP",
    image_url: "duo_teslar.jpg"
  )

  the_dlx = User.create!(
    username: "The DLX",
    email: "dlx@mail.com",
    password: "password1988PP",
    image_url: "dlx.jpg"
  )

  wordsmith = User.create!(
    username: "Wordsmith",
    email: "wordsmith@mail.com",
    password: "password1988PP",
    image_url: "wordsmith.jpg"
  )

  kellee_maize = User.create!(
    username: "Kellee Maize",
    email: "kellee_maize@mail.com",
    password: "password1988PP",
    image_url: "kellee.jpg"
  )

  alexey_baranov = User.create!(
    username: "Alexey Baranov",
    email: "alexey_baranov@mail.com",
    password: "password1988PP",
    image_url: "profile-m1.jpg"
  )

  thomas_hill = User.create!(
    username: "Thomas Hill",
    email: "thomas_hill@mail.com",
    password: "password1988PP",
    image_url: "profile-m2.jpg"
  )

  jennifer_auston = User.create!(
    username: "Jeniffer Auston",
    email: "jennifer_auston@mail.com",
    password: "password1988PP",
    image_url: "profile-w3.jpg"
  )

  mika_mcdoller = User.create!(
    username: "Mika McDoller",
    email: "mika_mcdoller@mail.com",
    password: "password1988PP",
    image_url: "profile-m3.jpg"
  )

  tiffany_smith = User.create!(
    username: "Tiffany Smith",
    email: "tiffany_smith@mail.com",
    password: "password1988PP",
    image_url: "profile-w4.jpg"
  )

  donald_brown = User.create!(
    username: "Donald Brown",
    email: "donald_brown@mail.com",
    password: "password1988PP",
    image_url: "profile-m4.jpg"
  )

  # SONGS
  song1 = Song.create!(
    song_name: "The Statement",
    filename: "Wordsmith_-_The_Statement.mp3",
    length: 171,
    artist_id: wordsmith.id
  )

  song2 = Song.create!(
    song_name: "Two Kids",
    filename: "THE_DLX_-_Two_Kids.mp3",
    length: 211,
    artist_id: the_dlx.id
  )

  song3 = Song.create!(
    song_name: "Crazy Glue",
    filename: "Melanie_Ungar_-_Crazy_Glue.mp3",
    length: 220,
    artist_id: melanie_ungar.id
  )

  song4 = Song.create!(
    song_name: "Moments",
    filename: "Ralph_Castelli_-_good_morning.mp3",
    length: 262,
    artist_id: ralph_castelli.id
  )

  song5 = Song.create!(
    song_name: "Rolling",
    filename: "Craze_24_-_Rolling__Original_Clean_.mp3",
    length: 262,
    artist_id: craze_24.id
  )

  song6 = Song.create!(
    song_name: "Universal Funk",
    filename: "Duo_Teslar_-_Universal_Funk.mp3",
    length: 252,
    artist_id: duo_teslar.id
  )

  km_song1 = Song.create!(
    song_name: "In Tune",
    filename: "01-1161940-Kellee Maize-In Tune _J. Glaze Remix_.mp3",
    length: 347,
    artist_id: kellee_maize.id
  )

  km_song2 = Song.create!(
    song_name: "I Insist",
    filename: "02-1161934-Kellee+Maize-I+Insist+_J.+Glaze+Remix_.mp3",
    length: 304,
    artist_id: kellee_maize.id
  )

  km_song3 = Song.create!(
    song_name: "Mad Humans",
    filename: "03-1161932-Kellee+Maize-Mad+Humans+_J.+Glaze+Remix_.mp3",
    length: 236,
    artist_id: kellee_maize.id
  )

  km_song4 = Song.create!(
    song_name: "Big Plans",
    filename: "04-1161938-Kellee Maize-Big Plans _J. Glaze Remix_.mp3",
    length: 257,
    artist_id: kellee_maize.id
  )

  km_song5 = Song.create!(
    song_name: "Owl Time",
    filename: "05-1161933-Kellee+Maize-Owl+Time+_J.+Glaze+and+Udachi+Remix_.mp3",
    length: 222,
    artist_id: kellee_maize.id
  )

  km_song6 = Song.create!(
    song_name: "Catch Me",
    filename: "06-1161935-Kellee Maize-Catch Me _J. Glaze Remix_.mp3",
    length: 299,
    artist_id: kellee_maize.id
  )

  km_song7 = Song.create!(
    song_name: "Fact Is",
    filename: "07-1161936-Kellee+Maize-Fact+Is+_J.+Glaze+and+Udachi+Remix_.mp3",
    length: 216,
    artist_id: kellee_maize.id
  )

  km_song8 = Song.create!(
    song_name: "Hasta Abajo",
    filename: "08-1161937-Kellee+Maize-Hasta+Abajo+_J.+Glaze+and+Mike+Cash+Remix_.mp3",
    length: 220,
    artist_id: kellee_maize.id
  )

  km_song9 = Song.create!(
    song_name: "In The Night - Game of Thrones Remake",
    filename: "09-1161939-Kellee+Maize-In+the+Night+-+Game+of+Thrones+Remake+_J.+Glaze+Remix_.mp3",
    length: 303,
    artist_id: kellee_maize.id
  )

  ab_song1 = Song.create!(
    song_name: "Sunny Day Again",
    filename: "01-1408398-Alexey+Baranov-Sunny+Day+Again.mp3",
    length: 213,
    artist_id: alexey_baranov.id
  )

  ab_song2 = Song.create!(
    song_name: "Maple Valley",
    filename: "02-1408403-Alexey+Baranov-Maple+Valley.mp3",
    length: 274,
    artist_id: alexey_baranov.id
  )

  ab_song3 = Song.create!(
    song_name: "Dreamy",
    filename: "03-1408956-Alexey+Baranov-Dreamy.mp3",
    length: 208,
    artist_id: alexey_baranov.id
  )

  ab_song4 = Song.create!(
    song_name: "Song for the New Age People",
    filename: "04-1412471-Alexey+Baranov-Song+For+The+New+Age+People.mp3",
    length: 353,
    artist_id: alexey_baranov.id
  )

  ab_song5 = Song.create!(
    song_name: "Rewind My Reel",
    filename: "05-1412469-Alexey+Baranov-Rewind+My+Reel.mp3",
    length: 297,
    artist_id: alexey_baranov.id
  )

  ab_song6 = Song.create!(
    song_name: "Melting",
    filename: "06-1412470-Alexey+Baranov-Melting.mp3",
    length: 274,
    artist_id: alexey_baranov.id
  )

  ab_song7 = Song.create!(
    song_name: "Koto",
    filename: "07-1411198-Alexey+Baranov-Koto.mp3",
    length: 235,
    artist_id: alexey_baranov.id
  )

  ab_song8 = Song.create!(
    song_name: "Round Around",
    filename: "08-1408963-Alexey+Baranov-Round+Around.mp3",
    length: 256,
    artist_id: alexey_baranov.id
  )

  ab_song9 = Song.create!(
    song_name: "Bubble Gum Machine",
    filename: "09-1409438-Alexey+Baranov-Bubble+Gum+Machine.mp3",
    length: 114,
    artist_id: alexey_baranov.id
  )

  ab_song10 = Song.create!(
    song_name: "Lullaby for Phil",
    filename: "10-1408401-Alexey+Baranov-Lullaby+For+Phil.mp3",
    length: 198,
    artist_id: alexey_baranov.id
  )

  ab_song11 = Song.create!(
    song_name: "Sunny Day Again (Simple Version)",
    filename: "11-1408400-Alexey+Baranov-Sunny+Day+Again+_Simple+Version_.mp3",
    length: 216,
    artist_id: alexey_baranov.id
  )

  # PLAYLISTS
  default_album_cover = "album_cover.png"

  playlist1 = Playlist.create!(
    title: "Saturday Afternoon",
    owner_id: jay.id,
    image_url: "saturday_afternoon.jpeg",
    date: 2017,
    genre: nil
  )

  playlist2 = Playlist.create!(
    title: "Running!",
    owner_id: emily.id,
    image_url: "running.jpeg",
    date: 2017,
    genre: nil
  )

  playlist3 = Playlist.create!(
    title: "Crazy Glue - Single",
    owner_id: melanie_ungar.id,
    image_url: "melanie_ungar.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist4 = Playlist.create!(
    title: "Good Morning - Single",
    owner_id: ralph_castelli.id,
    image_url: "Ralph_Castello.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist5 = Playlist.create!(
    title: "Rolling - Single",
    owner_id: craze_24.id,
    image_url: "Rolling.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist6 = Playlist.create!(
    title: "Two Kids - Single",
    owner_id: the_dlx.id,
    image_url: "Two_Kids.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist7 = Playlist.create!(
    title: "The Statement - Single",
    owner_id: wordsmith.id,
    image_url: "The_Statement.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist8 = Playlist.create!(
    title: "Universal Funk - Single",
    owner_id: duo_teslar.id,
    image_url: "duo_teslar.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist9 = Playlist.create!(
    title: "Glaze Remix",
    owner_id: kellee_maize.id,
    image_url: "kellee-maize-the-remixes.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist10 = Playlist.create!(
    title: "Sunny Day Again",
    owner_id: alexey_baranov.id,
    image_url: "sunny_day_again.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist11 = Playlist.create!(
    title: "Beautiful Soul",
    owner_id: demo.id,
    image_url: "woman_headphones.jpeg",
    date: 2017,
    genre: "pop"
  )

  playlist12 = Playlist.create!(
    title: "You've Got Something Special",
    owner_id: demo.id,
    image_url: "musician.jpeg",
    date: 2017,
    genre: "pop"
  )

  playlist13 = Playlist.create!(
    title: "Music Fusion",
    owner_id: jennifer_auston.id,
    image_url: "music_fusion_jennifer-auston.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist14 = Playlist.create!(
    title: "Smooth Jazz",
    owner_id: donald_brown.id,
    image_url: "jazz_donald-brown.jpg",
    date: 2017,
    genre: "jazz"
  )

  playlist15 = Playlist.create!(
    title: "Ordinary",
    owner_id: thomas_hill.id,
    image_url: "country_thomas-hill.jpg",
    date: 2017,
    genre: "country"
  )

  playlist16 = Playlist.create!(
    title: "Signature",
    owner_id: tiffany_smith.id,
    image_url: "signature_tiffany-smith.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist17 = Playlist.create!(
    title: "Sky",
    owner_id: mika_mcdoller.id,
    image_url: "sky_mika-mcdoller.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist18 = Playlist.create!(
    title: "Wonders",
    owner_id: tiffany_smith.id,
    image_url: "vacubus.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist19 = Playlist.create!(
    title: "In Love",
    owner_id: jennifer_auston.id,
    image_url: "love.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist20 = Playlist.create!(
    title: "Wingspan",
    owner_id: mika_mcdoller.id,
    image_url: "wingspan.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist21 = Playlist.create!(
    title: "Daily Mix 1",
    owner_id: pied_piper.id,
    image_url: "electronic.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist22 = Playlist.create!(
    title: "Daily Mix 2",
    owner_id: pied_piper.id,
    image_url: "tunes.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist23 = Playlist.create!(
    title: "Daily Mix 3",
    owner_id: pied_piper.id,
    image_url: "minimalist.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist24 = Playlist.create!(
    title: "Daily Mix 4",
    owner_id: pied_piper.id,
    image_url: "open_road.jpg",
    date: 2017,
    genre: "pop"
  )

  playlist25 = Playlist.create!(
    title: "Daily Mix 5",
    owner_id: pied_piper.id,
    image_url: "radiance.jpg",
    date: 2017,
    genre: "pop"
  )


  song7 = Song.create!( song_name: "White Cows", filename: "01-1161940-Kellee+Maize-In+Tune+_J.+Glaze+Remix_.mp3", length: 347,  artist_id: jennifer_auston.id)
  song8 = Song.create!( song_name: "the Tentative Legacy", filename: "02-1161934-Kellee+Maize-I+Insist+_J.+Glaze+Remix_.mp3", length: 304,  artist_id: jennifer_auston.id)
  song9 = Song.create!( song_name: "Horn of Teleprompters", filename: "03-1161932-Kellee+Maize-Mad+Humans+_J.+Glaze+Remix_.mp3", length: 236,  artist_id: jennifer_auston.id)
  song10 = Song.create!( song_name: "The Weeping's Chair", filename: "04-1161938-Kellee+Maize-Big+Plans+_J.+Glaze+Remix_.mp3", length: 257,  artist_id: jennifer_auston.id)
  song11 = Song.create!( song_name: "Labour Behind the Toadstools", filename: "05-1161933-Kellee+Maize-Owl+Time+_J.+Glaze+and+Udachi+Remix_.mp3", length: 222,  artist_id: jennifer_auston.id)
  song12 = Song.create!( song_name: "The Position Drink", filename: "06-1161935-Kellee+Maize-Catch+Me+_J.+Glaze+Remix_.mp3", length: 299,  artist_id: jennifer_auston.id)
  song13 = Song.create!( song_name: "Bashing", filename: "07-1161936-Kellee+Maize-Fact+Is+_J.+Glaze+and+Udachi+Remix_.mp3", length: 216,  artist_id: jennifer_auston.id)
  song14 = Song.create!( song_name: "Dance Locals", filename: "08-1161937-Kellee+Maize-Hasta+Abajo+_J.+Glaze+and+Mike+Cash+Remix_.mp3", length: 220,  artist_id: jennifer_auston.id)
  song15 = Song.create!( song_name: "Frozen Gun", filename: "09-1161939-Kellee+Maize-In+the+Night+-+Game+of+Thrones+Remake+_J.+Glaze+Remix_.mp3", length: 303, artist_id: jennifer_auston.id)
  song16 = Song.create!( song_name: "Use", filename: "01-1408398-Alexey+Baranov-Sunny+Day+Again.mp3", length: 213, artist_id: donald_brown.id)
  song17 = Song.create!( song_name: "Member", filename: "02-1408403-Alexey+Baranov-Maple+Valley.mp3", length: 274, artist_id: donald_brown.id)
  song18 = Song.create!( song_name: "On the Relationship", filename: "03-1408956-Alexey+Baranov-Dreamy.mp3", length: 208, artist_id: donald_brown.id)
  song19 = Song.create!( song_name: "Mist Speaks", filename: "04-1412471-Alexey+Baranov-Song+For+The+New+Age+People.mp3", length: 353, artist_id: donald_brown.id)
  song20 = Song.create!( song_name: "The Nature's Evenings", filename: "05-1412469-Alexey+Baranov-Rewind+My+Reel.mp3", length: 297, artist_id: donald_brown.id)
  song21 = Song.create!( song_name: "The Citizens of Job", filename: "06-1412470-Alexey+Baranov-Melting.mp3", length: 274, artist_id: donald_brown.id)
  song22 = Song.create!( song_name: "Organization Count Eyes", filename: "07-1411198-Alexey+Baranov-Koto.mp3", length: 235, artist_id: donald_brown.id)
  song23 = Song.create!( song_name: "Implied", filename: "08-1408963-Alexey+Baranov-Round+Around.mp3", length: 256, artist_id: donald_brown.id)
  song24 = Song.create!( song_name: "Meandering Slivers", filename: "09-1409438-Alexey+Baranov-Bubble+Gum+Machine.mp3", length: 114, artist_id: donald_brown.id)
  song25 = Song.create!( song_name: "Sign Bashing", filename: "10-1408401-Alexey+Baranov-Lullaby+For+Phil.mp3", length: 198, artist_id: donald_brown.id)
  song26 = Song.create!( song_name: "Undobuted Wonder", filename: "11-1408400-Alexey+Baranov-Sunny+Day+Again+_Simple+Version_.mp3", length: 216, artist_id: donald_brown.id)
  song27 = Song.create!( song_name: "The Rings of Afflictions", filename: "Wordsmith_-_The_Statement.mp3", length: 171, artist_id: thomas_hill.id)
  song28 = Song.create!( song_name: "German of Dungeon", filename: "THE_DLX_-_Two_Kids.mp3", length: 211, artist_id: thomas_hill.id)
  song29 = Song.create!( song_name: "Reactionaries Without the Occastion", filename: "Melanie_Ungar_-_Crazy_Glue.mp3", length: 220, artist_id: thomas_hill.id)
  song30 = Song.create!( song_name: "White Continuum", filename: "Ralph_Castelli_-_good_morning.mp3", length: 262, artist_id: tiffany_smith.id)
  song31 = Song.create!( song_name: "Wait", filename: "Craze_24_-_Rolling__Original_Clean_.mp3", length: 262, artist_id: tiffany_smith.id)
  song32 = Song.create!( song_name: "Sheep", filename: "Duo_Teslar_-_Universal_Funk.mp3", length: 252, artist_id: mika_mcdoller.id)
  song33 = Song.create!( song_name: "Behind the Undoubted Snake", filename: "01-1161940-Kellee+Maize-In+Tune+_J.+Glaze+Remix_.mp3", length: 347,  artist_id: mika_mcdoller.id)
  song34 = Song.create!( song_name: "Healer Flys On a Advocates", filename: "02-1161934-Kellee+Maize-I+Insist+_J.+Glaze+Remix_.mp3", length: 304,  artist_id: tiffany_smith.id)
  song35 = Song.create!( song_name: "Luck Under Muffins", filename: "03-1161932-Kellee+Maize-Mad+Humans+_J.+Glaze+Remix_.mp3", length: 236,  artist_id: tiffany_smith.id)
  song36 = Song.create!( song_name: "The Ruby Picture", filename: "04-1161938-Kellee+Maize-Big+Plans+_J.+Glaze+Remix_.mp3", length: 257,  artist_id: tiffany_smith.id)
  song37 = Song.create!( song_name: "The Flames of Romance", filename: "05-1161933-Kellee+Maize-Owl+Time+_J.+Glaze+and+Udachi+Remix_.mp3", length: 222,  artist_id: tiffany_smith.id)
  song38 = Song.create!( song_name: "The World's Tea", filename: "06-1161935-Kellee+Maize-Catch+Me+_J.+Glaze+Remix_.mp3", length: 299,  artist_id: tiffany_smith.id)
  song39 = Song.create!( song_name: "Once Count Seclusion", filename: "07-1161936-Kellee+Maize-Fact+Is+_J.+Glaze+and+Udachi+Remix_.mp3", length: 216,  artist_id: tiffany_smith.id)
  song40 = Song.create!( song_name: "Moon Sniffing", filename: "08-1161937-Kellee+Maize-Hasta+Abajo+_J.+Glaze+and+Mike+Cash+Remix_.mp3", length: 220,  artist_id: tiffany_smith.id)
  song41 = Song.create!( song_name: "Whispering Silence", filename: "09-1161939-Kellee+Maize-In+the+Night+-+Game+of+Thrones+Remake+_J.+Glaze+Remix_.mp3", length: 303, artist_id: tiffany_smith.id)
  # song42 = Song.create!( song_name: "Blue", filename: "01-1408398-Alexey+Baranov-Sunny+Day+Again.mp3", length: 213, artist_id: alexey_baranov.id)
  # song43 = Song.create!( song_name: "Swimming Far", filename: "02-1408403-Alexey+Baranov-Maple+Valley.mp3", length: 274, artist_id: alexey_baranov.id)
  # song44 = Song.create!( song_name: "The Name of the Heart", filename: "03-1408956-Alexey+Baranov-Dreamy.mp3", length: 208, artist_id: alexey_baranov.id)
  # song45 = Song.create!( song_name: "Abyss", filename: "04-1412471-Alexey+Baranov-Song+For+The+New+Age+People.mp3", length: 353, artist_id: alexey_baranov.id)
  # song46 = Song.create!( song_name: "The Alchemist's Operations", filename: "05-1412469-Alexey+Baranov-Rewind+My+Reel.mp3", length: 297, artist_id: alexey_baranov.id)
  # song47 = Song.create!( song_name: "Molecules", filename: "06-1412470-Alexey+Baranov-Melting.mp3", length: 274, artist_id: alexey_baranov.id)
  # song48 = Song.create!( song_name: "Borrow", filename: "07-1411198-Alexey+Baranov-Koto.mp3", length: 235, artist_id: alexey_baranov.id)
  # song49 = Song.create!( song_name: "From the Shadowy Cat", filename: "08-1408963-Alexey+Baranov-Round+Around.mp3", length: 256, artist_id: alexey_baranov.id)
  # song50 = Song.create!( song_name: "Miracles From the Sky", filename: "09-1409438-Alexey+Baranov-Bubble+Gum+Machine.mp3", length: 114, artist_id: alexey_baranov.id)
  # song51 = Song.create!( song_name: "The Age of Happiness", filename: "10-1408401-Alexey+Baranov-Lullaby+For+Phil.mp3", length: 198, artist_id: alexey_baranov.id)
  # song52 = Song.create!( song_name: "Day of the Horn", filename: "11-1408400-Alexey+Baranov-Sunny+Day+Again+_Simple+Version_.mp3", length: 216, artist_id: alexey_baranov.id)
  # song53 = Song.create!( song_name: "The Side Stone", filename: "Wordsmith_-_The_Statement.mp3", length: 171, artist_id: wordsmith.id)
  # song54 = Song.create!( song_name: "Garden Wild", filename: "THE_DLX_-_Two_Kids.mp3", length: 211, artist_id: the_dlx.id)
  # song55 = Song.create!( song_name: "Nebulus", filename: "Melanie_Ungar_-_Crazy_Glue.mp3", length: 220, artist_id: melanie_ungar.id)
  # song56 = Song.create!( song_name: "Digital Wonder", filename: "Ralph_Castelli_-_good_morning.mp3", length: 262, artist_id: ralph_castelli.id)
  # song57 = Song.create!( song_name: "Soaring Winters", filename: "Craze_24_-_Rolling__Original_Clean_.mp3", length: 262, artist_id: craze_24.id)
  # song58 = Song.create!( song_name: "Bound", filename: "Duo_Teslar_-_Universal_Funk.mp3", length: 252, artist_id: duo_teslar.id)

  # PLAYLIST_SONGS (JOINS)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: km_song9.id, playlist_id: playlist1.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist2.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist2.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist3.id)
  PlaylistSong.create!(song_id: song4.id, playlist_id: playlist4.id)
  PlaylistSong.create!(song_id: song5.id, playlist_id: playlist5.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist6.id)
  PlaylistSong.create!(song_id: song6.id, playlist_id: playlist8.id)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist7.id)
  # kellee maize - Glaze
  PlaylistSong.create!(song_id: km_song1.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song2.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song3.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song4.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song5.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song6.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song7.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song8.id, playlist_id: playlist9.id)
  PlaylistSong.create!(song_id: km_song9.id, playlist_id: playlist9.id)
  # Alexey Baranov - sunny_day_again
  PlaylistSong.create!(song_id: ab_song1.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song2.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song3.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song4.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song5.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song6.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song7.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song8.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song9.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song10.id, playlist_id: playlist10.id)
  PlaylistSong.create!(song_id: ab_song11.id, playlist_id: playlist10.id)
  # Demo user playlists
  PlaylistSong.create!(song_id: km_song9.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: km_song2.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: km_song3.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: km_song6.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: km_song1.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: song5.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist11.id)
  PlaylistSong.create!(song_id: km_song4.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: km_song2.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: km_song9.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: km_song1.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: song4.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: song6.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist12.id)
  PlaylistSong.create!(song_id: song22.id, playlist_id: playlist12.id)
  # Random ones
  PlaylistSong.create!(song_id: song7.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song8.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song9.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song10.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song11.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song12.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song13.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song14.id, playlist_id: playlist13.id)
  PlaylistSong.create!(song_id: song15.id, playlist_id: playlist13.id)
  #
  PlaylistSong.create!(song_id: song16.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song17.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song18.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song19.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song20.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song21.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song22.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song23.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song24.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song25.id, playlist_id: playlist14.id)
  PlaylistSong.create!(song_id: song26.id, playlist_id: playlist14.id)
  #
  PlaylistSong.create!(song_id: song27.id, playlist_id: playlist15.id)
  PlaylistSong.create!(song_id: song28.id, playlist_id: playlist15.id)
  PlaylistSong.create!(song_id: song29.id, playlist_id: playlist15.id)
  #
  PlaylistSong.create!(song_id: song30.id, playlist_id: playlist16.id)
  PlaylistSong.create!(song_id: song31.id, playlist_id: playlist16.id)
  PlaylistSong.create!(song_id: song32.id, playlist_id: playlist17.id)
  PlaylistSong.create!(song_id: song33.id, playlist_id: playlist17.id)
  PlaylistSong.create!(song_id: song34.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song35.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song36.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song37.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song38.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song39.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song40.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song41.id, playlist_id: playlist18.id)
  PlaylistSong.create!(song_id: song7.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song9.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song13.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song16.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song20.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song5.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song12.id, playlist_id: playlist19.id)
  PlaylistSong.create!(song_id: song12.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song15.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song20.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song25.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song39.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song32.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song24.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song28.id, playlist_id: playlist20.id)
  PlaylistSong.create!(song_id: song8.id, playlist_id: playlist20.id)
  # DAILY MIXES
  PlaylistSong.create!(song_id: song8.id, playlist_id: playlist21.id)
  PlaylistSong.create!(song_id: song11.id, playlist_id: playlist21.id)
  PlaylistSong.create!(song_id: song13.id, playlist_id: playlist21.id)
  PlaylistSong.create!(song_id: song14.id, playlist_id: playlist21.id)
  PlaylistSong.create!(song_id: song22.id, playlist_id: playlist21.id)
  PlaylistSong.create!(song_id: song22.id, playlist_id: playlist22.id)
  PlaylistSong.create!(song_id: song23.id, playlist_id: playlist22.id)
  PlaylistSong.create!(song_id: song25.id, playlist_id: playlist22.id)
  PlaylistSong.create!(song_id: song28.id, playlist_id: playlist22.id)
  PlaylistSong.create!(song_id: song29.id, playlist_id: playlist22.id)
  PlaylistSong.create!(song_id: song29.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song30.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song31.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song33.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song36.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song37.id, playlist_id: playlist23.id)
  PlaylistSong.create!(song_id: song37.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song39.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song30.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song40.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song41.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song21.id, playlist_id: playlist24.id)
  PlaylistSong.create!(song_id: song11.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: song1.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: song3.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: song2.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: song5.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: song6.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: km_song4.id, playlist_id: playlist25.id)
  PlaylistSong.create!(song_id: km_song9.id, playlist_id: playlist25.id)


end
