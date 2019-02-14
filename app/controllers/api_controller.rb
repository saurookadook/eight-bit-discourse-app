class ApiController < ActionController::API
  # temp fix for auth_token issues
  skip_before_action :verify_authenticity_token, raise: false

  include Knock::Authenticable

  protected

  def set_user!
    # TODO: custom method for pulling out user info?
    if params[:post]
      @user = User.find_by(id: params[:post][:author][:id])
    # elsif params[:user]
    #   @user = User.find_by(id: params[:user][:id])
    else
      @user = User.find_by(id: params[:id])
    end
  end
end