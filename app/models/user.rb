class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  acts_as_paranoid
  has_many :categories
  has_many :products
  before_save { self.email = email.downcase }
  # validates :username, presence: true, uniqueness: { case_sensitive: false },
  # length: { minimum: 3, maximum: 25 }
  # VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  # validates :email, presence: true, length: { maximum: 25 },
  # uniqueness: { case_sensitive: false },
  # format: { with: VALID_EMAIL_REGEX }
end
