module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = User.find(params[:id]);
        render json: UserSerializer.new(user).serializable_hash.to_json
      end

      def update
        user = User.find(params[:id]);
        if user.update(user_params)
          render json: UserSerializer.new(user).serializable_hash.to_json
        else
          render json: appointment.errors.full_messages, status: 422
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end
    end
  end
end
