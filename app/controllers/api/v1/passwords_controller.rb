#send_password_reset reset_password methods in models/user.rb
module Api
  module V1
    class PasswordsController < ApplicationController
      def forgot
        user = User.find_by(email: params[:email])
        if user
          render json: {
            alert: "We have sent you a password reset email."
          }
          user.send_password_reset
          else
          render json: {
            alert: "Sorry something went wrong."
          }
        end
      end

      def reset
        user = User.find_by(reset_password_token: params[:token], email: params[:email])
        if user.present? && user.password_token_valid?
          if user.reset_password(params[:password])
            render json: {
              alert: "You have successfully reset your password!"
            }
            else
            render json: { error: user.errors.full_messages }, status: 422
          end
          else
          render json: {error: ['Link not valid or expired']}, status: 404
        end
      end
    end
  end
end
