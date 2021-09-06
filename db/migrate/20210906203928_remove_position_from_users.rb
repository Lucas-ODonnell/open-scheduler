class RemovePositionFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :position, :string
  end
end
