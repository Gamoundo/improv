class GameroomSerializer < ActiveModel::Serializer
    attributes :id, :rounds, :playersnum, :player_id, :users 
  end