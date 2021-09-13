require 'rails_helper'

RSpec.describe Appointment, type: :model do

  it "is valid with valid attributes" do
    @user1 = create(:user)

    appointment = Appointment.new(
      company_name: "McDonalds",
      street_address: "123 Main St",
      city: "Tigard",
      state: "Oregon",
      country: "USA",
      phone: "503-555-5444",
      user_id: @user1.id
    )
    expect(appointment).to be_valid
  end

  it "is not valid without a company_name"
  it "is not valid without a street address"
  it "is not valid without a city"
  it "is not valid without a country"
  it "is not valid without a phone"
end
