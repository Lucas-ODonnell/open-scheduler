module Api
  module V1
    class AppointmentsController < ApplicationController
      before_action :authenticate_user!
      def index
        appointments = Appointment.where(user_id: current_user).order("meeting_date ASC")
        #calling the full AppointmentSerializer is redundant since I don't need the lead relationships
        #and I need company_name formatted_date, and slug
        render json: AppointmentIndexSerializer.new(appointments).serializable_hash.to_json
      end

      def show
        appointment = Appointment.find_by(slug: params[:slug])
        appointment.phone = appointment.formatted_phone
        options = {
          include: [:lead, :'lead.name', :'lead.position', :'lead.notes']
        }
        render json: AppointmentSerializer.new(appointment, options).serializable_hash.to_json
      end

      def create
        appointment = Appointment.new(appointment_params)
        appointment.user_id = current_user.id
        if appointment.save
          render json: AppointmentSerializer.new(appointment).serializable_hash.to_json
          else
          render json: appointment.errors.full_messages, status: 422
        end
      end

      def update
        appointment = Appointment.find_by(slug: params[:slug])
        if appointment.update(appointment_params)
          appointment.phone = appointment.formatted_phone
          render json: AppointmentSerializer.new(appointment).serializable_hash.to_json
          else
          render json: appointment.errors.full_messages, status: 422
        end
      end

      def destroy
        appointment = Appointment.find_by(slug: params[:slug])
        if appointment.destroy
          head :no_content
          else
          render json: appointment.errors.full_messages, status: 422
        end
      end

      private

      def appointment_params
        params.require(:appointment).permit(:company_name, :street_address, :city, :country, :zipcode, :company_contact, :notes, :meeting_date, :state, :phone, :email, :normalize_date)
      end
    end
  end
end
