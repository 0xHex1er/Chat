Rails.application.routes.draw do

  get 'angular/index'

  get 'fullpage/index'

  get 'test/index'

  get 'infinite/index'

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

  controller :api do
    get 'api/validate_generate_room/:store/:user' => :validate_generate_room
    get 'api/store_get_list_chat_user/:store' => :store_get_list_chat_user
    get 'api/get_load_message/:store/:user'  => :get_load_message
    get 'api/get_load_message_by_page/:store/:user/:page/:offset'  => :get_load_message_by_page
    get 'api/get_all_message'  => :get_all_message
    get 'api/get_all_user'  => :get_all_user
  end

  controller :infinite do
    get 'infinite/index' => :index
  end

  controller :fullpage do
    get 'fullpage/index' => :index
  end

end
