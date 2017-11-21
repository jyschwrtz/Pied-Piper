Database Schema:

## Users (Artists)
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|username     |string     |           |
|email        |string     |           |
|password_digest|string   |           |
|session_token  |string   |           |
|image_url    |string     |           |
* `has_many :playlists`
<!-- * `has_many :albums` (playlists, if an artist) -->
<!-- * `has_many :songs` (if an artist) -->
* `has_many :user_follows`
* `has_many :followed_users` (through user_follows)
* `has_many :user_followers`
* `has_many :followers` (through user_followers)
* `has_many :playlist_follows`
* `has_many :followed_playlists` (through playlist_follows)

## Songs
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|song_name    |string     |           |
|length       |integer    |do I need this?|
|filename     |string     |           |
|artist_id    |integer    |foreign key|
|album_id  |integer    |foreign key, allow_nil: true - artist singles?|
* `belongs_to :artist` (user)
* `belongs_to :album` (playlist)
* `has_many :playlist_songs`
* `has_many :playlists` (through playlist_songs)

## Playlists (Albums)
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|title        |string     |           |
|year         |string     |           |
|genre        |string     |model validation of certain types|
|image_url    |string     |           |
|owner_id     |integer    |foreign key|
* `belongs_to :owner` (user)
<!-- * `has_many :album_songs` ????? -->
* `has_many :playlist_songs`
* `has_many :songs` (through playlist_songs)
* `has_many :playlists_followers`
* `has_many :followers` (through playlist_followers)

## Playlist Songs
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|song_id      |integer    |foreign key|
|playlist_id  |integer    |foreign key|
* `belongs_to :playlist`
* `belongs_to :songs`

## User_follows
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|follower_id  |integer    |foreign key (user)|
|followed_user_id|integer    |foreign key (user)|
### (Joins Table)
* `belongs_to :follower` (user)
* `belongs_to :followed_user` (user)

## Playlist_follows
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|follower_id  |integer    |foreign key (user)|
|followed_playlist_id|integer    |foreign key (playlist)|
### (Joins Table)
* `belongs_to :follower` (user)
* `belongs_to :followed_playlist` (playlist)
