Rails.application.routes.draw do
  devise_for :users
  resources :users
  resources :categories
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root 'pages#home'
  get 'pages/angular', to: 'pages#angular'
    
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
  end
  devise_scope :user do
    get '/logout', to: 'devise/sessions#destroy', as: :logout
  end
end
