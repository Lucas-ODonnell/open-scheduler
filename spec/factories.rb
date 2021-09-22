FactoryBot.define do
  factory :document do
    title { "Test String" }
    description { "Test String" }
    after(:build) do |document|
      document.file.attach(io: File.open(Rails.root.join('spec', 'models', 'files', 'test.jpg')), filename: 'test.jpg', content_type: 'image/jpg')
    end
    user
  end

  factory :api_key do
    token {"SomeRandomToken"}
  end

  factory :user do
    name {"Billy Bob"}
    email {"billybob@gmail.com"}
    password {"password"}
  end

  factory :appointment do
    company_name {"McDonalds"}
    street_address {"123 Main St"}
    city {"Tigard"}
    state {"Oregon"}
    country {"USA"}
    zipcode {97223}
    phone {"503-555-5444"}
    company_contact {"Ronald McDonald"}
    email {"hr@mcdonald.com"}
    notes {"Client is interested"}
    meeting_date {Time.now}
    user
  end

  factory :profile do
    position {"CEO"}
    bio {"I wont say"}
    department {"C Suite"}
    user_id {1}
    user
  end

  factory :lead do
    name {"Red"}
    company {"Pokemon and More"}
    position {"CEO"}
    phone {"423-333-4433"}
    email {"gotacatchemall@gmail.com"}
    referrer {"Blue"}
    user
  end
end
