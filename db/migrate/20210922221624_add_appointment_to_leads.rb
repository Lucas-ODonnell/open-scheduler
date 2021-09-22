class AddAppointmentToLeads < ActiveRecord::Migration[6.1]
  def change
    add_reference :leads, :appointment, foreign_key: true
  end
end
