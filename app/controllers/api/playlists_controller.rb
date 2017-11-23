class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.owner_id = current_user.id
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def update
    @playlist = current_user.playlists.find_by(id: params[:id])

    unless @playlist
      return render json: ["Current user cannot modify others' playlist"],
                    status: 401
    end

    if @playlist.update_attributes(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = current_user.playlists.find_by(id: params[:id])

    unless @playlist
      return render json: ["Current user cannot modify others' playlist"],
                    status: 401
    end

    if @playlist.delete
      @playlists = Playlist.all
      render :index
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
