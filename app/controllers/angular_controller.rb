class AngularController < ApplicationController
  def index
    @list_room = Room.where(:user => params[:user])
  end
  def test_component

  end
end
