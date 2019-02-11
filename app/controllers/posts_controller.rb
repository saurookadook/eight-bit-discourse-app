class PostsController < ApiController
  before_action :set_user!, only: [:create, :update, :destroy]

  def index
    @posts = Post.order(created_at: :desc)
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])

    render json: @post, include: ['author', 'comments', 'comments.user']
  end

  def create
    @post = @user.posts.build(title: params[:post][:title], game: params[:post][:game], discussion: params[:post][:discussion], rating: params[:post][:rating], user_id: @user.id)

    if @post.valid?
      @post.save
      self.class.index
      # @posts = Post.order(created_at: :desc)
      # render json: @posts
      # find way to do this with just rendering @post
      # render json: @posts, include: ['author']
    else
      render json: { message: "There was an issue submitting your post, please try again."}
    end
  end

  def update
    binding.pry
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :game, :discussion, :rating, :user_id,
      author_attributes: [:id, :username, :email]
      )
  end

end
