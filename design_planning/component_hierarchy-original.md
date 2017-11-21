# React Component Hierarchy

## Functional Component Hierarchy
* Root
  * App
    * Side Bar
    * Main Page
    * Controls Bar (footer)

## Side Bar
* `SideBarContainer` + `SideBar`
  * State: `session`
  * Components:
    * `SideBarNavContainer` + `SideBarNav`
      * State: `session` & `users`
    * `RecentlyPlayedContainer` + `RecentlyPlayed`
      * State: `session` & `songs`
      * `RecentlyPlayedItems`

## Controls Bar
* Controls Bar
  * Components:
    * `CurrentSong`
      * State: `song`, `artists`
    * `SongProgress`
      * State: `song`
    * `PlayerControls`
    * `VolumeControls`

## Session
* `SessionFormContainer` + `SessionForm`
  * Route: `/#/login` + `/#/signup`
  * State: `errors.login`

**Note**: All other components are rendered inside the Main Page.
## Browse
* `BrowseDisplay`
  * Route: `/#/browse/featured`
  * State: `playlists`
  * Components: `PlaylistItem`
  * More routes and displays if time

## Search
* `SearchIndexContainer` + `SearchIndex`
  * Route: `/#/search` (implement `/#/search/recent` if time)
  * State:
    * `songs`
    * `artists`
    * `users`
    * `playlists`
    * `albums`
  * Components:
    * `SearchBar
    * `NavBar`
    * `SearchIndexContainer` + `SearchIndex`
      * State:
        * `songs`
        * `artists`
        * `users`
        * `playlists`
        * `albums`
      * `SearchIndexItem

## Your Music (similar to search results)
* `Playlists`
  * Route: `/#/collection/playlists`
  * State: `playlists`

* `songs`
  * Route: `/#/collection/songs`
  * State: `songs`

* `Albums`
  * Route: `/#/collection/albums`
  * State: `albums`

* `Artists`
  * Route: `/#/collection/artists`
  * State: `artists`

## Show Pages
* User (viewing different user)
  * Route: `/#/users/:user_id`
  * State: `user`
  * Components:
    * `User`
      * `UserControls`
    * `NavBar`
    * `BrowseDisplay` (reused from Browse feature?)

* User (current user's account)
  * Route: `/#/users/:user_id/account`
  * State: `user`
  * Components: `UserAccount`

* Playlist
  * Route: `/#/playlists/:playlist_id`
  * State:
    * `playlist`
    * `songs`
    * `albums`
    * `artists`
  * Components:
    * `Playlist`
      * `PlaylistControls`
    * `SongIndex`
      * `SongIndexItem`

* Album
  * Route: `/#/albums/:album_id`
  * State: `album`
    * `songs`
    * `album`
    * `artist`
  * Components:
    * `Album`
      * `AlbumControls`
    * `SongIndex`
      * `SongIndexItem`

* `Artists`
  * Route: `/#/artists/:artist_id`
  * State: `artists`
  * Components:
    * `Artist`
      * `ArtistControls`
    * `NavBar`
    * `SongIndex`
      * `SongIndexItem`
    * `AlbumIndex`
      * `AlbumIndexItem`
