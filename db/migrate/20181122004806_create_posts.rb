class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :game
      t.text :discussion
      t.string :rating
      t.string :user_id

      t.timestamps
    end
  end
end
