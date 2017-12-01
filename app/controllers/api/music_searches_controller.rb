class Api::MusicSearchesController < ApplicationController
  def index
    @songs = Song.top_five_results(search_params[:query])
    @playlists = Playlist.top_six_results(search_params[:query])
    @users = User.top_six_results(search_params[:query])
  end

  def songs_by_playlist
    @playlist = Playlist.find_by(id: search_params[:playlist_id])
    @songs = @playlist.songs
    render :songs_by_playlist
  end

  def songs_by_artist
    @songs = Song.where(artist_id: search_params[:artist_id])
    render :songs_by_artist
  end

  private

  def search_params
    params.require(:search).permit(:query, :playlist_id, :artist_id)
  end
end
