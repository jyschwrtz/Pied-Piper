Database Schema:

## Users:
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|username     |string     |           |
|password_digest|string   |           |
|session_token  |string   |           |
|image_url    |string     |           |

## Artists
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|name         |string     |           |
|image_url    |string     |           |

## Albums
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|title        |string     |           |
|year         |string     |           |
|genre        |string     |model validation of certain types|
|image_url    |string     |           |
|artist_id    |integer    |foreign key|

## Songs
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|song_name    |string     |           |
|length       |integer    |do I need this?|
|filename     |string     |           |
|artist_id    |integer    |foreign key|
|album_id     |integer    |foreign key, allow_nil: true - artist singles?|

## Playlists
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|playlist_name|string     |           |
|owner_id     |integer    |foreign key|

## Playlist Songs
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|song_id      |integer    |foreign key|
|playlist_id  |integer    |foreign key|

## User_follows
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|follower_id  |integer    |foreign key (user)|
|followed_user_id|integer    |foreign key (user)|
### (Joins Table)

## Playlist_follows
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|follower_id  |integer    |foreign key (user)|
|followed_playlist_id|integer    |foreign key (playlist)|
### (Joins Table)

## Artist_follows
| Column Name | Data Type | Details   |
|-------------|:---------:|:----------|
|id           |integer    |primary key|
|follower_id  |integer    |foreign key (user)|
|followed_artist_id|integer    |foreign key (artist)|
### (Joins Table)

Question: Should the joins tables all be separated into individual joins tables or combined into one with null values?
