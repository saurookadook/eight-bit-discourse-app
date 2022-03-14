class UserTokenController < Knock::AuthTokenController
    # temp fix for auth_token issues
    skip_before_action :verify_authenticity_token, raise: false
end
