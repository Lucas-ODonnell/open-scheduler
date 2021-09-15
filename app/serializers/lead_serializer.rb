class LeadSerializer
  include JSONAPI::Serializer
  attributes  :name, :company, :position, :phone, :email, :referrer
end
