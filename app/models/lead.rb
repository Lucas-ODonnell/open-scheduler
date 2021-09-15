class Lead < ApplicationRecord
  belongs_to :user
  validates :name, :company, :referrer, presence: true
  before_save :normalize_phone

  def formatted_phone
    parsed_phone = Phonelib.parse(phone)
    return phone if parsed_phone.invalid?

    formatted =
    if parsed_phone.country_code == "1"
      parsed_phone.full_national
      else
      parsed_phone.full_international
    end
    formatted.gsub!(";", " x")
    formatted
  end

  private

  def normalize_phone
    formatted_phone = remove_nondigits(phone)
    self.phone = Phonelib.parse(formatted_phone).full_e164.presence
  end

  def remove_nondigits(phone)
    phone.delete('^0-9')
  end
end
