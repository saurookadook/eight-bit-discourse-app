class PostsController < ApiController
  before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :set_user!, only: [:create, :update, :destroy]

  def index
    @posts = Post.order(created_at: :desc)
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])

    render json: @post, include: ['user', 'comments', 'comments.user']
  end

  def create
    @post = @user.posts.build(post_params)

    if @post.valid?
      @post.save
      self.index
      # find way to do this with just rendering @post
      # render json: @posts
    else
      render json: { message: "There was an issue submitting your post, please try again."}
    end
  end

  def update
    # binding.pry
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    self.index
  end

  private

  def post_params
    params.require(:post).permit(:title, :game, :discussion, :rating, :user_id, :vote_count)
  end

end
