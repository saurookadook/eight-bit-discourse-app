class Comment < ApplicationRecord
  # TODO
  # belongs_to :author, class_name: "User", foreign_key: "user_id"
  belongs_to :user
  belongs_to :post

  # validates_associated :user
  validates :content, presence: true
  # accept_nested_attributes_for :user
  end
  