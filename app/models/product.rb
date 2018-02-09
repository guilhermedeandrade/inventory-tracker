class Product < ApplicationRecord
  belongs_to :category
  validates :name, presence: true, length: { minimum: 3, maximum: 50}
  validates :description, presence: true, length: { minimum: 10, maximum: 50}
end
