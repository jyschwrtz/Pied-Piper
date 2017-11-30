class Api::MusicSearchesController < ApplicationController
  def index
    @songs = Song.top_five_results(search_params[:query])
    @playlists = Playlist.top_six_results(search_params[:query])
    @users = User.top_six_results(search_params[:query])
  end

  # def random_playlist
  #   @playlist = Playlist.all.sample
  #   render 'api/playlists/show'
  # end
  #
  # def songs_by_playlist
  #   @songs = Song.where(playlist_id: search_params(:playlist_id))
  #   render :songs_by_playlist
  # end

  private

  def search_params
    params.require(:search).permit(:query, :playlist_id)
  end
end
