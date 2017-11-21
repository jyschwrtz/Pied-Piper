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

## Frontend Routes
* `/login`
* `/signup`
* `/browse`
* `/search`
* `/collections/playlists` View current user's playlists
* `/collections/songs` View current user's songs
* `/playlists/:playlistId` View playlist
* `/users/:userId` View user
* `/users/:userId/account` View user account
