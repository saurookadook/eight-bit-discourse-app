class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :post_id, :vote_count

  # TODO
  # belongs_to :author, class_name: "User", foreign_key: "user_id"
  belongs_to :user
  belongs_to :post
end
