module Api
  module V1
    class AppointmentsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        appointments = Appointment.all
        render json: AppointmentSerializer.new(appointments).serializable_hash.to_json
      end

      def show
        appointment = Appointment.find_by(slug: params[:slug])
        render json: AppointmentSerializer.new(appointment).serializable_hash.to_json
      end

      def create
        appointment = Appointment.new(appointment_params)
        if appointment.save
          render json: AppointmentSerializer.new(appointment).serializable_hash.to_json
          else
          render json: {error: appointment.errors.messages}
        end
      end

      def update
        appointment = Appointment.find_by(slug: params[:slug])
        if appointment.update(appointment_params)
          render json: AppointmentSerializer.new(appointment).serializable_hash.to_json
          else
          render json: {error: appointment.errors.messages}
        end
      end

      def destroy
        appointment = Appointment.find_by(slug: params[:slug])
        if appointment.destroy
          head :no_content
          else
          render json: {error: appointment.errors.messages}
        end
      end

      private

      def appointment_params
        params.require(:appointment).permit(:company_name, :street_address, :city, :country, :zipcode, :company_contact, :notes, :meeting_date, :state, :phone, :email)
      end
    end
  end
end
