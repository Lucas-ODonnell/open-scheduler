FactoryBot.define do
  factory :user do
    name {Faker::Internet.name}
    email {Faker::Internet.email}
    password {Faker::Internet.password}
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
    user
  end

  factory :profile do
    position {"CEO"}
    bio {"I wont say"}
    department {"C Suite"}
    user_id {1}
    user
  end
end
