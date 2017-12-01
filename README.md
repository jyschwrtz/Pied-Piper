# Pied Piper - Music App
[Live Demo](https://pied-piper-spotify-clone.herokuapp.com/#/)

Pied Piper is a clone of the popular music app, Spotify.  It runs on a Rails/PostgreSQL backend with a React.js and Redux front end.

This project was created within a two-week deadline.  More features are planned for a later date.

![Pied Piper Home Page](https://raw.githubusercontent.com/jyschwrtz/pied-piper-design-docs/master/screenshots/pied_piper_home_page.png)

## Contents
* Features
* Project Design
* Technologies
* Additional Resources
* Future Features

## Features
* Secure user frontend/backend authentication using BCrypt
* Continuous song playback while navigating app
  * Playlist index and song history maintained throughout playback
  * Songs and playlists dynamically show which are currently playing
* Playlist create, delete, & edit (title)
* Add & delete songs from playlists
  * Only allowed for playlist owner
* Search songs, playlists, users with updating results on keystroke

### User authentication

![login](https://github.com/jyschwrtz/pied-piper-design-docs/raw/master/gifs/login.gif)

### Continuous Playback
The main feature of this app is the ability to listen to music.  The audio playback component was created using React Howler with all of the audio files hosted on AWS S3.  I laid out the music player with an overall component housing three main components:

* Side Bar Navigation
* Control Bar
* Main Page

All of the audio playback feature is held in the control bar component, while the current song, playlist, and play/pause information is sent back through the Redux store.

The more challenging aspect of this project was the selection of playlists and songs, and tracking which song/playlist was selected, and where at within a playlist.  The following show the playing of playlists and songs, with the currently playing playlist and song showing CSS features to indicate this.

#### Playlist Selection
![playlist-select2](https://github.com/jyschwrtz/pied-piper-design-docs/raw/master/gifs/playlist_select.gif)

Tracking the song position in a playlist and previous/next songs was done using:
  * Song History
  * Current Song
  * Song Queue

As the previous and next songs are navigated, the songs are added and removed to the various queues.  The result along with CSS extras can be seen below:

#### Song Selection
![song-select](https://github.com/jyschwrtz/pied-piper-design-docs/raw/master/gifs/song_select.gif)

### Search

![search](https://github.com/jyschwrtz/pied-piper-design-docs/raw/master/gifs/search.gif)

## Project Design
Pied Piper was designed to be a clone of Spotify's web app.  Due to the short time-frame for design and implementation, the main focus was matching the style and functionality of Spotify, with simplicity prioritized at various points.  

Artists and albums do not have separate tables, and are instead combined into the users and playlists tables, respectively.  This creates some additional complexity in attempting to select artists separate from users and albums separate from playlists, however, it also reduced the number of tables required to complete this project.

## Technologies

#### Rails
Ruby on Rails was used because of the ability to be up and running quickly.  This small-scale portfolio piece did not focus on the scalability aspect, again due to the short time-frame.

#### React.js & Redux
Frontend Redux states were used in order to keep users, playlists, songs, session, errors, and ui consistent throughout the components.

#### AWS S3
Amazon Web Services S3 was used to host all of the images and song data.

## Additional Resources
* [Proposal Wireframes](https://github.com/jyschwrtz/Pied-Piper/wiki/Wireframes)
* [Routes & API Endpoints](https://github.com/jyschwrtz/Pied-Piper/wiki/Routes)
* [Database Schema](https://github.com/jyschwrtz/Pied-Piper/wiki/Database-Schema)

## Future Features
* Distinguish between users and artists
* Add functionality to follow playlists and users
