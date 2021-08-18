Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, param: :slug
      resources :users, only: [:show, :create, :destroy, :edit]
    end
  end
end
