class Document < ApplicationRecord
  belongs_to :user
  has_one_attached :file, dependent: :destroy
  validates :title, :description, :file, presence: true
  validate :acceptable_file

  def acceptable_file
    return unless file.attached?
    unless file.byte_size <= 5.megabyte
    errors.add(:file, "is too big")
    end
  end
end
