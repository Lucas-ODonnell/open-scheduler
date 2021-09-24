module Api
  module V1
    class LeadsController < ApplicationController
      before_action :authenticate_user!
      def index
        leads = Lead.where(user_id: current_user).order("created_at DESC")
        leads.each { |lead| lead.phone = lead.formatted_phone }
        render json: LeadSerializer.new(leads).serializable_hash.to_json
      end
    
      def create
        lead = Lead.new(lead_params)
        lead.user_id = current_user.id
        if lead.save
          render json: LeadSerializer.new(lead).serializable_hash.to_json
          else
          render json: lead.errors.full_messages, status: 422
        end
      end

      def update
        lead = Lead.find(params[:id])
        if lead.update(lead_params)
          lead.phone = lead.formatted_phone
          render json: LeadSerializer.new(lead).serializable_hash.to_json
          else
          render json: lead.errors.full_messages, status: 422
        end
      end

      def destroy
        lead = Lead.find(params[:id])
        if lead.destroy
          head :no_content
          else
          render json: lead.errors.full_messages, status: 422
        end
      end

      private

      def lead_params
        params.require(:lead).permit(:name, :company, :position, :phone, :email, :referrer, :notes, :appointment_id)
      end
    end
  end
end
