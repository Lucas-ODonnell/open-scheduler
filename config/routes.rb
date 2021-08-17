Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, param: :slug
      resources :sessions, only: [:create, :destroy]
    end
  end
end
