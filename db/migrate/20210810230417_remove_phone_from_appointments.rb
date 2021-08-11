class RemovePhoneFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :phone, :integer
  end
end
