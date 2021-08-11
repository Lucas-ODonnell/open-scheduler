class AddEmailToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :email, :string
  end
end
