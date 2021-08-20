module Api
  module V1
    class AuthenticationController < ApplicationController
      protect_from_forgery with: :null_session
      class AuthenticationError < StandardError; end
      rescue_from ActionController::ParameterMissing, with: :parameter_missing
      rescue_from AuthenticationError, with: :handle_unauthenticated
      def create
        raise AuthenticationError unless user.valid_password?(params.require(:password))
        token = AuthenticationTokenService.call(user.id)

        render json: { token: token}, status: :created
      end

      private

      def user
        @user ||= User.find_by(email: params.require(:email));
      end

      def parameter_missing(e)
        render json: { error: e.message }, status: :unprocessable_entity
      end

      def handle_unauthenticated
        head :unauthorized
      end
    end
  end
end
