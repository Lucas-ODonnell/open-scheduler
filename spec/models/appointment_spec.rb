require 'rails_helper'

RSpec.describe Appointment, type: :model do
  before(:all) do
    @appointment1 = create(:appointment) 
  end

  it "is valid with valid attributes" do
    expect(@appointment1).to be_valid
  end

  it "is not valid without a company_name" do
    appointment2 = build(:appointment, company_name: nil)
    expect(appointment2).to_not be_valid
  end
  it "is not valid without a street address" do
    appointment2 = build(:appointment, street_address: nil)
    expect(appointment2).to_not be_valid
  end
  it "is not valid without a city" do
    appointment2 = build(:appointment, city: nil)
    expect(appointment2).to_not be_valid
  end
  it "is not valid without a country" do
    appointment2 = build(:appointment, country: nil)
    expect(appointment2).to_not be_valid
  end
  it "is not valid without a phone" do
    appointment2 = build(:appointment, phone: nil)
    expect(appointment2).to_not be_valid
  end

  it "phone should not be an integer" do
    appointment2 = build(:appointment, phone: 5025555466)
    expect(appointment2.phone).to_not be_a(Integer)
  end

  it "should create a slug" do
    expect(@appointment1.slug).to eq("mcdonalds")
  end
end


