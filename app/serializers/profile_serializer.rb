class ProfileSerializer
  include JSONAPI::Serializer
  attributes  :full_name, :position, :bio, :department
end
