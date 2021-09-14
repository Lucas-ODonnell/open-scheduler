require 'rails_helper'

RSpec.describe Profile, type: :model do
 
  before(:all) do
    @profile = create(:profile)
  end

  it "is valid with valid attributes" do
    expect(@profile).to be_valid
  end
end
