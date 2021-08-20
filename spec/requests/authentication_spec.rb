require 'rails_helper'

describe 'Authentication', type: :request do
  describe 'POST /authenticate' do
    user = User.create(
      name:"bob",
      email: "test@test.com",
      password: "12345678",
      password_confirmation: "12345678"
    )
    it 'authenticates the client' do
      post '/api/v1/authenticate', params: { email: user.email, password: user.password }

      expect(response).to have_http_status(:created)
        expect(response_body).to eq({
          'token' => 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w'
        })

    end

    it 'returns error when email is missing' do
      post '/api/v1/authenticate', params: { password: user.password }
      expect(response_body).to eq({
        "error"=>"param is missing or the value is empty: email\nDid you mean?  action\n               password\n               controller"
      })
    end

    it 'returns error when password is missing' do
      post '/api/v1/authenticate', params: { email: user.email }
      expect(response_body).to eq({
        "error"=>"param is missing or the value is empty: password\nDid you mean?  action\n               controller\n               email"
      })
    end

    it 'returns error when password is incorrect' do
      post '/api/v1/authenticate', params: { email: user.email, password: "incorrect" }
      expect(response).to have_http_status(:unauthorized)
    end
  end
end
