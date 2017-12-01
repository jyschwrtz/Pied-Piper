Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show index] do
    end
    resource :session, only: %i[new create destroy]
    resources :songs, only: %i[index show]
    resources :playlists, only: %i[index show create update destroy] do
      resources :playlist_songs, only: %i[create destroy show]
    end
    resources :music_searches, only: [:index] do
      get "songs_by_playlist", on: :collection
      get "songs_by_artist", on: :collection
      get "random_playlist", on: :collection
    end
  end

end
