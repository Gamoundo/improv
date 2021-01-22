class CreateGamerooms < ActiveRecord::Migration[6.0]
  def change
    create_table :gamerooms do |t|
      t.integer :rounds
      t.integer :playersnum
      t.integer :player_id
      t.integer :situation_id
      t.integer :solution_id
      t.integer :emotion_id
      
      t.timestamps
    end
  end
end
