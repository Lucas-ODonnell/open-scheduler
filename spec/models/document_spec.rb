require 'rails_helper'

RSpec.describe Document, type: :model do
  before(:all) do
    @document1 = create(:document) 
  end

  it "is valid with valid attributes" do
    expect(@document1).to be_valid
  end

  it "is not valid without title" do
    @document2 = build(:document, title: "");
    expect(@document2).to_not be_valid
  end

  it "is not valid without description" do
    @document2 = build(:document, description: "")
    expect(@document2).to_not be_valid
  end

  it "expects an attachment" do
    expect(@document1.file).to be_attached
  end

  it "accepts files under 5mb" do
    @document2 = build(:document)
    expect(@document2.errors[:file]).to_not include { :file => "is too big" }
  end

  it "doesn't accept files over 5mb" do
    @document2 = build(:document)
    @document2.file.attach(io: File.open(Rails.root.join('spec', 'models', 'files', 'test2.jpg')), filename: 'test2.jpg', content_type: 'image/jpg')
    expect(@document2.errors[:file]).to include { :file => "is too big" }
  end
end
