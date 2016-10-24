Rails.application.routes.draw do

  get 'user/login'

  root :to => "chat#index"

  controller :chat do
    get 'chat/index'  => :index
  end

  # root 'chat/#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
