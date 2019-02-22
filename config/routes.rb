Rails.application.routes.draw do

  scope 'api' do 
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
    get 'signup' => 'users#new'
    post 'signup' => 'users#create'

    resources :posts do
      resources :comments
    end

    # resources :users, :posts, :comments do 
    resources :users do
      resources :posts
      resources :comments
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
