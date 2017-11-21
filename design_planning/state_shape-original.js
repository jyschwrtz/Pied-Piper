      {
        entities: {
          songs: {
            1: {
              id: 1,
              title: "song-title",
              artist_id: 1, //artist_id
              album_id: 1 //album_id
            },
            2: {
              id: 2,
              title: "song-title2",
              artist_id: 1, //artist_id
              album_id: 1 //album_id
            }
          }
          albums: {
            1: {
              id: 1,
              title: "album-title",
              year: 2017,
              artist_id: 1, //artist_id
              genre: 1 //genre_id
            }
            2: {
              id: 2,
              title: "album-title2",
              year: 2012,
              artist_id: 1, //artist_id
              genre: 1 //genre_id
            }
          }
          artists: {
            1: {
              id: 1,
              name: "artist-name",
              followers: [1, 3, 4]
            }
            2: {
              id: 2,
              name: "artist-name2",
              followers: [2, 3, 4]
            }
          }
          users: {
            1: {
              id: 1,
              username: "username",
              img_url: "profile-picture-url",
              users_following: [2, 3, 4],
              artists_following: [1, 2],
              playlists_following: [2, 4],
              followers: [2, 3, 4]
            }
            2: {
              id: 2,
              username: "username2",
              img_url: "profile-picture-url2",
              users_following: [2, 3, 4],
              artists_following: [1, 2],
              playlists_following: [1, 4],
              followers: [1, 4]
            }
          }
          playlist: {
            1: {
              id: 1,
              playlist_name: "playlist 1",
              owner_id: 1
              followers: [2, 3, 4]
            }
            2: {
              id: 2,
              playlist_name: "playlist 2",
              owner_id: 2
              followers: [1, 4]
            }
          }
        },
        ui: {
          loading: true/false
        },
        errors: {
          login: ["Incorrect username/password combination"]
        }
        session: {
          id: 20,
          song_history: [3, 1, 2]
          current_playlist: 1, //is this needed?
          current_album: 1, //is this needed?
          current_song: 1,
          current_user: 1,
          img_url: "https://......"
        }
      }
