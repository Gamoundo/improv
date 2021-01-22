Rails.application.routes.draw do
  resources :emotions
  resources :solutions
  resources :situations
  resources :user_gamerooms
  resources :gamerooms
  resources :users

  post "/join", to: "gamerooms#join"
  post "/vote", to: "gamerooms#vote"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
