class ChatController < ApplicationController
  def index
    @store = User.where(:role => 'store')
  end
end
