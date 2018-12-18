Rails.application.routes.draw do
  # post 'user_token' => 'user_token#create'

  # resources :users
  scope 'api' do 
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
    get 'signup' => 'users#new'
    post 'signup' => 'users#create'

    # resources :users, only: [:show] do
    #   resources :posts
    #   resources :comments
    # end

    resources :posts do
      resources :comments
    end

    # resources :users, :posts, :comments do 
    resources :users do
      # post 'user_token' => 'user_token#create'
      # post 'find_user' => 'users#find'
      resources :posts
      resources :comments
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
