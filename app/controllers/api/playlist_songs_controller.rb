class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.playlist_id = params[:playlist_id]
    if @playlist_song.save
      @playlist = Playlist.find_by(id: params[:playlist_id])
      render 'api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:playlist_id])
    @playlist_song = @playlist.playlist_songs.find_by(id: params[:id])

    unless @playlist_song
      return render json: ["User does not have permission to delete this song."], status: 401
    end

    if @playlist_song.delete
      render 'api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 401
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id)
  end
end
