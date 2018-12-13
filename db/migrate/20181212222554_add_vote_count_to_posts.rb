class AddVoteCountToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :vote_count, :integer, default: 0
  end
end
