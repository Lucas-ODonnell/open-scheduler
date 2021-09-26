class AppointmentIndexSerializer
  include JSONAPI::Serializer
  attributes  :company_name, :slug, :formatted_date
end
