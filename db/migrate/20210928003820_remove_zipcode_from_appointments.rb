class RemoveZipcodeFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :zipcode, :integer
  end
end
