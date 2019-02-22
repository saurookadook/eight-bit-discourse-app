class ApiController < ActionController::API
  # temp fix for auth_token issues
  skip_before_action :verify_authenticity_token, raise: false

  include Knock::Authenticable

  # def fallback_index_html
  #   render file: 'public/index.html'
  # end
    
  protected

  def set_user!
    if params[:post]
      @user = User.find_by(id: params[:post][:author][:id])
    else
      @user = User.find_by(id: params[:id])
    end
  end
end