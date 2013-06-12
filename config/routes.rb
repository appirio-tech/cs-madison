Madison::Application.routes.draw do
  get '/requirements/library', to: 'requirements#library'
  resources :requirements
  root to: 'application#index'
end
