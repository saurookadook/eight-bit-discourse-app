class ApiController < ActionController::API
  # temp fix for auth_token issues
  skip_before_action :verify_authenticity_token, raise: false

  include Knock::Authenticable
end