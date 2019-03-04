class User < ApplicationRecord
  has_many :posts
  has_many :comments, through: :posts
  
  has_secure_password
  validates :password, presence: true 
  
  validates :username, uniqueness: true, presence: true

  # TODO: the RegExp is close, but doesn't account for the 
  # local-part ending with a '.' (https://en.wikipedia.org/wiki/Email_address)
  validates :email, presence: true, 
    format: { with: /\A[^\.]([a-z0-9\.]){1,64}\@([a-z0-9\.]){1,255}/i, 
    message: "Invalid email address" }
end
  