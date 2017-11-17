{
  entities: {
    songs: {
      1: {
        id: 1,
        title: "song-title",
        artist_id: 1, //artist_id  ???
        album_id: 1 //album_id
      },
      2: {
        id: 2,
        title: "song-title2",
        artist_id: 1, //artist_id  ???
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
        name: "artist-name"
      }
      2: {
        id: 2,
        name: "artist-name2"
      }
    }
    users: {
      1: {
        id: 1,
        username: "username",
        img_url: "profile-picture-url"
      }
      2: {
        id: 2,
        username: "username2",
        img_url: "profile-picture-url2"
      }
    }
  },
  ui: {
    lading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"]
  }
  session: {
    id: 20,
    username: "jay_schwartz",
    img_url: "https://......"
  }
}
