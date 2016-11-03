class InfiniteController < ApplicationController
  def index
    @a = Message.paginate(:page => 2, :limit => 3).order_by(:id => 'desc')
  end
end
