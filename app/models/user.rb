class User
  include Mongoid::Document
  field :name, type: String
  field :password, type: String
  field :role, type: String
end
