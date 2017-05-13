class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password])

    if @user
      login_user(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout_user
      render json: {}
    else
      render json: ["Nobody signed in"], status: 401
    end
  end
end
