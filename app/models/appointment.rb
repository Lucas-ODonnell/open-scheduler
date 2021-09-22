class Appointment < ApplicationRecord
  validates :company_name, :street_address, :city, :country, :meeting_date, presence: true
  validates :zipcode, length: {minimum:5, maximum: 5}, allow_blank: true
  validates :phone, phone: true, presence: true
  before_save :normalize_phone, :normalize_date;
  before_create :slugify
  belongs_to :user
  has_one :lead

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

  def normalize_date
    return if self.meeting_date == nil
    self.formatted_date = self.meeting_date.strftime("%B %d, %Y at %I:%M %p")
  end
end
