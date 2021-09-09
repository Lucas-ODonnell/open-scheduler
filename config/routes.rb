Rails.application.routes.draw do
  devise_for :users, :controllers => { 
        sessions: 'users/sessions',
        registrations: 'users/registrations'
  }
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, param: :slug
      resources :users, only: [:show, :update]
      resources :profiles, only: [:create, :show, :update]
    end
  end

  get '*path' => redirect('/')
end
