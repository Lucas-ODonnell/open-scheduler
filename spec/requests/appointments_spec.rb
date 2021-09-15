require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.describe "Appointments", type: :request do
  let (:user) { create(:user) }
  let (:appointment) { build(:appointment) }

  describe "GET appointments#index" do
    it "should get redirect if user is not logged in" do
      get '/api/v1/appointments'
      expect(response).to have_http_status(302)
    end
    it "should be a success if user is logged in" do
      headers = { 'Accept' => 'application/json', 'Content-Type' => 'application/json' }
      # This will add a valid token for `user` in the `Authorization` header
      auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, user)
      get '/api/v1/appointments', headers: auth_headers
      expect(response).to have_http_status(200)
    end
  end

end
