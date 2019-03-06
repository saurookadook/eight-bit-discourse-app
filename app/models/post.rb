class Post < ApplicationRecord
  belongs_to :user
  
  has_many :comments
  has_many :users, through: :comments

  accepts_nested_attributes_for :user
  accepts_nested_attributes_for :comments
  # validates_associated :comments

  
end
  