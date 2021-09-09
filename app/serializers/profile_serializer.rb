class ProfileSerializer
  include JSONAPI::Serializer
  attributes  :position, :bio, :department
end
