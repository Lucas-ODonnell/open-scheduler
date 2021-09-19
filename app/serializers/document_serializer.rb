class DocumentSerializer
  include JSONAPI::Serializer
  attributes  :title, :description, :file
end
