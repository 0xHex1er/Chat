class Message
  include Mongoid::Document
  include Mongoid::Pagination

  field :user, type: String
  field :store, type: String
  field :message, type: String
  field :send_form, type: String


  has_one :room
end
