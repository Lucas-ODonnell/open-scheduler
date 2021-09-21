Rails.application.routes.draw do
  devise_for :users, :controllers => { 
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, param: :slug
      resources :users, only: [:show, :update, :destroy]
      resources :profiles, only: [:create, :show, :update]
      resources :leads, except: [:show]
      resources :documents, only: [:index, :create, :destroy]

    end
  end
  post 'api/v1/forgot_password' => "api/v1/passwords#forgot"
  post 'api/v1/reset_password' => "api/v1/passwords#reset"

end
