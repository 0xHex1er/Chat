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
    @login_user = User.where(:name => params[:username])
    if @login_user.count > 0
      @login_user = @login_user[0]
      @store = User.where(:role => "store")
    end
  end

  def store
    @login_user = User.where(:name => params[:username])
    if @login_user.count > 0
      @login_user = @login_user[0]
    end
  end
end
