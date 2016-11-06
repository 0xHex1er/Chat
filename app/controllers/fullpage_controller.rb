class FullpageController < ApplicationController
  def index
    @list_room = Room.where(:user => params[:user])
  end
end
