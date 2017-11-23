Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show index] do
      # resources :playlists, only: %i[create]
    end
    resource :session, only: %i[new create destroy]
    resources :songs, only: %i[index show]
    resources :playlists, only: %i[index show create update destroy]
  end

end
