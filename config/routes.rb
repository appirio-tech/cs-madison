Madison::Application.routes.draw do
  resources :requirements


  root to: 'application#index'
end
