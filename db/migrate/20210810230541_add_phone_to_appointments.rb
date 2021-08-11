class AddPhoneToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :phone, :string, null: false
  end
end
