class Category < ApplicationRecord
  acts_as_paranoid
  # belongs_to :user
  # has_many :products
  validates :name, presence: true, length: { minimum: 3, maximum: 25 }
end
