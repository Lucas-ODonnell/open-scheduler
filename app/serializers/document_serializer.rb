class DocumentSerializer
  include JSONAPI::Serializer
  singleton_class.include Rails.application.routes.url_helpers
  attributes  :title, :description

  #get the url of file
  attribute :file do |object|
    rails_blob_url(object.file, only_path:true) if object.file.attached?
  end
end
