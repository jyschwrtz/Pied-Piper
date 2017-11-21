# Routes

## HTML
* `GET /` `StaticPagesController#root`

## API Endpoints
### `users`
* `GET /api/users` - returns relevant users (filtered by `data`/`params`)
* `POST /api/users` - sign up (with passed in `data`)
* `GET /api/users/:user_id` - returns user

### `session`
* `POST /api/session` - log in (with passed in `data`)
* `DELETE /api/session` - log out

### `songs`
* `GET /api/songs` - returns relevant songs (filtered by `data`/`params`)
* `GET /api/songs/:song_id` - returns song

### `artists`
* `GET /api/artists` - returns relevant artists (filtered by `data`/`params`)
* `GET /api/artists/:artist_id` - returns artist

### `albums`
* `GET /api/albums` - returns relevant albums (filtered by `data`/`params`)
* `GET /api/albums/:album_id` - returns album

### `playlists`
* `GET /api/playlists` - returns relevant playlists (filtered by `data`/`params`)
* `GET /api/playlists/:playlist_id` - returns playlist
* `POST /api/playlists` - create playlist (with passed in `data`)
* `DELETE /api/playlists/:playlist_id` - delete playlist
* `PATCH /api/playlists/:playlist_id` - update playlist (with passed in `data`)

### `user_follows`
* `POST /api/user_follows` - follows user
* `DELETE /api/user_follows` - unfollows user

### `playlist_follows`
* `POST /api/playlist_follows` - follows playlist
* `DELETE /api/playlist_follows` - unfollows playlist

### `artist_follows`
* `POST /api/artist_follows` - follows artist
* `DELETE /api/artist_follows` - unfollows artist

## Frontend Routes
* `/login`
* `/signup`
* `/browse`
* `/search`
* `/collections/playlists` View current user's playlists
* `/collections/songs` View current user's songs
* `/collections/albums` View current user's albums
* `/collections/artists` View current user's artists
* `/playlists/:playlistId` View playlist
* `/albums/:albumId` View album
* `/artists/:artistId` View artist
* `/users/:userId` View user
* `/users/:userId/account` View user account
