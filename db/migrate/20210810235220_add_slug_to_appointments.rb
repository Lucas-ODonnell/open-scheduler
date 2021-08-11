class AddSlugToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :slug, :string
  end
end
