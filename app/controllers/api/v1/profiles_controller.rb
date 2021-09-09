module Api
  module V1
    class ProfilesController < ApplicationController

      def show
        profile = Profile.find_by(user_id: params[:id])
        render json: ProfileSerializer.new(profile).serializable_hash.to_json
      end

      def update
        profile = Profile.find_by(user_id: current_user)
        if profile.update(profile_params)
          render json: ProfileSerializer.new(profile).serializable_hash.to_json
          else
          render json: profile.errors.full_messages, status: 422
        end
      end

      private
      
      def profile_params
        params.require(:profile).permit(:position, :bio, :department)
      end
    end
  end
end
