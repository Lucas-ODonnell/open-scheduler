require 'rails_helper'

describe Users::SessionsController, type: :request do

  let (:user) { create(:user) }
  let (:login_url) { '/users/sign_in' }
  let (:logout_url) { '/users/sign_out' }

  context 'When logging in' do
    before do
      login_with_api(user)
    end

    it 'returns a token' do
      expect(response.headers['Authorization']).to be_present
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end
  end

  context 'When password is missing' do
    before do
      post login_url, params: {
        user: {
          email: user.email,
          password: nil
        }
      }
    end

    it 'returns 401' do
      expect(response.status).to eq(401)
    end

  end
end
