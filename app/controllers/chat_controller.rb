class ChatController < ApplicationController
  def index
    @store = User.where(:role => 'store')
  end

  def chat
    @user = User.find(params[:user_id])
    @store = User.find(params[:store_id])
  end
end
