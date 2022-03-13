class PostSerializer < ActiveModel::Serializer
    attributes :id, :title, :game, :discussion, :rating, :user_id, :vote_count

    belongs_to :user

    has_many :comments
    has_many :users, through: :comments
end
