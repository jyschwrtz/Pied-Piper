class Api::PlaylistSongsController < ApplicationController
  def show
    @playlist_song ||= PlaylistSong.find_by(id: params[:id])
  end

  def create
    @playlist = current_user.playlists.find_by(id: params[:playlist_id])

    unless @playlist
      return render json: ["User does not have permission to modify this playlist."], status: 401
    end

    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.playlist_id = params[:playlist_id]

    if @playlist_song.save
      render :show
    else
      render json: @playlist_song.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = current_user.playlists.find_by(id: params[:playlist_id])

    unless @playlist
      return render json: ["User does not have permission to modify this playlist."], status: 401
    end

    @song = @playlist.songs.find_by(id: params[:id])

    @playlist_song = @playlist.playlist_songs.find_by(playlist_id: @playlist, song_id: @song)

    unless @playlist_song
      return render json: ["Song not found in playlist."], status: 402
    end

    if @playlist_song.delete
      render :show
    else
      render json: @playlist_song.errors.full_messages, status: 403
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id)
  end
end
