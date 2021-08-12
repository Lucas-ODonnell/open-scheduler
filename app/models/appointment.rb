class Appointment < ApplicationRecord
  validates :company_name, :street_address, :city, :country, presence: true
  validates :phone, phone: true, presence: true
  before_save :normalize_phone
  before_create :slugify

  def slugify
    self.slug = company_name.parameterize
  end

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
