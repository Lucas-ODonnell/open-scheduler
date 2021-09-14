require 'rails_helper'

RSpec.describe "Appointments", type: :request do
  before(:all) do
    @user = create(:user)
  end

  describe "GET appointments#index" do
    it "should get redirect if user is not logged in" do
      get '/api/v1/appointments'
      expect(response).to have_http_status(302)
    end

    it "should be a success if user is logged in" do
      get '/api/v1/appointments'
      expect(response).to have_http_status(200)
    end
  end
end
