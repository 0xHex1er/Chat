class Room
  include Mongoid::Document
  field :room_name, type: String
  field :user, type: String
  field :store, type: String
end
