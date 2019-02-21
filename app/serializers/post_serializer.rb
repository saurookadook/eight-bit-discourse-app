class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :game, :discussion, :rating, :user_id, :vote_count
  
  belongs_to :author, class_name: "User", foreign_key: "user_id"

  has_many :comments
  has_many :authors, through: :comments, source: :user
end
