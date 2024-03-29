class UsersController < ApiController
    # TODO: fix for update
    before_action :authenticate_user, only: [:update]
    before_action :set_user!, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.all
        render json: @users
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            render json: @user
        else
            @errors = @user.errors.full_messages
            render json: @errors, status: 400
        end
    end

    def update
        @user.update(user_params)
        if @user.valid?
            @user.save
            render json: @user
        else
            @errors = @user.errors.full_messages
            render json: @errors, status: 400
        end
    end

    def destroy
    end

    def find
        @user = User.find_by(email: params[:user][:email])
        if @user
            render json: @user
        else
            @errors = @user.errors.full_messages
            render json: @errors, status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:id, :username, :email, :password, :password_digest, :password_confirmation, :errors)
    end

end
