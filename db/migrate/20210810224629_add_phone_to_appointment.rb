class AddPhoneToAppointment < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :phone, :integer, null: false
  end
end
