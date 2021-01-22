class GameroomSerializer < ActiveModel::Serializer
    attributes :id, :rounds, :playersnum, :player_id, :users, :emotion_id, :situation_id, :solution_id
  end