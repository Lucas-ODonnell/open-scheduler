class LeadSerializer
  include JSONAPI::Serializer
  attributes  :name, :company, :position, :phone, :email, :referrer, :notes, :appointment_id
end
