class CommentsController < ApiController
  before_action :set_user!, only: [:create, :update, :destroy]
  # might only need create, update, destroy...?

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments

    render json: @comments, include: ['user']
  end

  def show
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:comment_id])

    render json: @comment, include: ['user']
  end

  def create
    @post = Post.find(params[:post_id])

    @comment = @post.comments.build(comment_params)
    
    if @comment.valid?
      @post.save
      render json: @post, include: ['author', 'comments', 'comments.user']
    else
      render json: { message: "There was an issue submitting your comment, please try again."}
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    @post = Post.find(params[:post_id])
    render json: @post, include: ['author', 'comments', 'comments.user']
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, :user_id,)
  end

end