require 'rails_helper'

describe Users::RegistrationsController, type: :request do
  let (:signup_url) { '/users' }
  let (:user) { build(:user) }
  let (:existing_user) {create(:user)}

  context 'When creating a new user' do
    before do
      post signup_url, params: {
        user: {
          name: user.name,
          email: user.email,
          password: user.password
        }
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns a token' do
      expect(response.headers['Authorization']).to be_present
    end

  end

  context 'When an email already exists' do
    before do
      post signup_url, params: {
        user: {
          name: existing_user.name,
          email: existing_user.email,
          password: existing_user.password
        }
      }
    end

    it 'returns 400' do
      expect(response.status).to eq(400)
    end
  end
end
