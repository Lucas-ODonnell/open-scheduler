class AppointmentSerializer
  include JSONAPI::Serializer
  attributes  :company_name, :street_address, :city, :country, :zipcode, :company_contact, :notes, :meeting_date, :state, :phone, :email, :slug, :formatted_date
end
