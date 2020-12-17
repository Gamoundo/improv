Rails.application.routes.draw do
  resources :user_gamerooms
  resources :gamerooms
  resources :users

  post "/join", to: "gamerooms#join"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
