class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :post_id, :vote_count
  belongs_to :user
  belongs_to :post
end
