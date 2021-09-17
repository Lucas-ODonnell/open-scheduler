require 'rails_helper'

RSpec.describe Lead, type: :model do
  before(:all) do
    @lead1 = create(:lead) 
  end

  it "is valid with valid attributes" do
    expect(@lead1).to be_valid
  end

  it "is not valid without a name" do
    lead2 = build(:lead, name: nil)
    expect(lead2).to_not be_valid
  end
  it "is not valid without a company" do
    lead2 = build(:lead, company: nil)
    expect(lead2).to_not be_valid
  end
  it "is not valid without a referrer" do
    lead2 = build(:lead, referrer: nil)
    expect(lead2).to_not be_valid
  end

  it "is not valid without a valid user" do
    lead2 = build(:lead, user_id: nil)
    expect(lead2).to_not be_valid
  end 
end
