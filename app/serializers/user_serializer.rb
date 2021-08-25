class UserSerializer
  include JSONAPI::Serializer
  attributes  :email, :name, :company, :position
end
