class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.owner_id = params(:user_id)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def update
    
  end

  def destroy
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end

end
