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
          playlists: {
            1: {
              id: 1,
              title: "album-title",
              year: 2017,
              genre: 1,
              img_url: "album-picture-url1",
              owner_id: 1, //artist_id
              followers: [3],
            }
            2: {
              id: 2,
              title: "album-title2",
              year: 2012,
              genre: 1,
              img_url: "album-picture-url2",
              owner_id: 3, //artist_id
              followers: [2, 4],
            }
            3: {
              id: 3,
              title: "playlist 1",
              year: null,
              genre: null,
              owner_id: 1,
              followers: [2, 3, 4],
            }
            4: {
              id: 4,
              title: "playlist 2",
              year: null,
              genre: null,
              owner_id: 2,
              followers: [3, 4],
            }
          }
          users: {
            1: {
              id: 1,
              username: "username",
              img_url: "profile-picture-url",
              users_following: [2, 3, 4],
              playlists_following: [2, 4],
              followers: [2, 3, 4]
            }
            2: {
              id: 2,
              username: "username2",
              img_url: "profile-picture-url2",
              users_following: [2, 3, 4],
              playlists_following: [1, 4],
              followers: [1, 4]
            }
            3: {
              id: 3,
              username: "username3",
              img_url: "profile-picture-url3",
              users_following: [2, 3, 4],
              playlists_following: [1, 4],
              followers: [1, 4]
            }
            4: {
              id: 4,
              username: "username4",
              img_url: "profile-picture-url4",
              users_following: [1, 2, 3, 5, 6],
              playlists_following: [1, 4],
              followers: [1]
            }
            5: {
              id: 3,
              username: "artist-name1",
              img_url: "profile-picture-url5",
              users_following: [],
              playlists_following: [],
              followers: [1, 3, 4]
            }
            6: {
              id: 6,
              username: "artist-name2",
              img_url: "profile-picture-url6",
              users_following: [],
              playlists_following: [],
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
          current_playlist: 1
          current_song: 1,
          current_user: 1,
          img_url: "https://......"
        }
      }
