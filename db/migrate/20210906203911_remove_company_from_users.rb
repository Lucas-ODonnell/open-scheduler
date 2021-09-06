class RemoveCompanyFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :company, :string
  end
end
