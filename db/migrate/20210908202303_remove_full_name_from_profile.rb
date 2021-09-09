class RemoveFullNameFromProfile < ActiveRecord::Migration[6.1]
  def change
    remove_column :profiles, :full_name, :string
  end
end
