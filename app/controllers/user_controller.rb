class UserController < ApplicationController
  def login
  end

  def check_login
    if params[:username] != "" and params[:password] != ""
      @login = User.where(:name => params[:username], :password => params[:password])
      if @login.count == 1
        if @login[0].role == "member"
          redirect_to :controller=>"user", action: "member", username:@login[0].name
        else
          redirect_to :controller=>"user", action: "store", username:@login[0].name
        end
      end
    end
  end

  def member

  end

  def store

  end
end
