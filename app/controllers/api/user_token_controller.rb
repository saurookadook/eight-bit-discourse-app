class Api::UserTokenController < Knock::AuthTokenController
    skip_before_action :verify_authenticity_token
    def create
        # binding.pry
        render json: auth_token, status: :created
    end
end
