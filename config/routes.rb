Rails.application.routes.draw do
  root 'appointments#index'

  namespace :api do
    namespace :v1 do
      resources :appointments, param: :slug
    end
  end
end
