class Post < ApplicationRecord
  belongs_to :author, class_name: "User", foreign_key: "user_id"
  
  has_many :comments
  has_many :authors, through: :comments, source: :user

  accepts_nested_attributes_for :author
  # validates_associated :author
  # validates_associated :comments

  # accepts_nested_attributes_for :comments
end
  