class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post

    # validates_associated :user
    validates :content, presence: true
    accepts_nested_attributes_for :user
end
