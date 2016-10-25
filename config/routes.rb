Rails.application.routes.draw do

  get 'member/login'

  root :to => "user#login"

  controller :chat do
    get 'chat/index'  => :index
    get 'chat/:store_id' => :store_chat
    get 'chat/:store_id/:user_id' => :chat

  end

  controller :user do
    get 'user/login'  => :login
    post 'user/check_login'  => :check_login
    get 'user/member/:username' => :member
    get 'user/store/:username' => :store
  end


end
