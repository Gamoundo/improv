class CreateGamerooms < ActiveRecord::Migration[6.0]
  def change
    create_table :gamerooms do |t|
      t.integer :rounds
      t.integer :playersnumm

      t.timestamps
    end
  end
end
