Rails.application.routes.draw do

  get 'member/login'

  root :to => "member#login"

  controller :chat do
    get 'chat/index'  => :index
  end

  controller :user do
    get 'user/login'  => :login
    post 'user/check_login'  => :check_login
    get 'user/member/:username' => :member
    get 'user/store/:username' => :store
  end


end
