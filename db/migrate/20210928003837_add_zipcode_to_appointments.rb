class AddZipcodeToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :zipcode, :string
  end
end
