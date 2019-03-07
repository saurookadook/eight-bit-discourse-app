class Post < ApplicationRecord
  belongs_to :user
  
  has_many :comments
  has_many :users, through: :comments

  accepts_nested_attributes_for :user
  accepts_nested_attributes_for :comments

  validates :title, :game, :discussion, :rating, presence: true
  validates :rating, numericality: { greater_than: 0, less_than: 11 }

  # TODO: game model?
end
  