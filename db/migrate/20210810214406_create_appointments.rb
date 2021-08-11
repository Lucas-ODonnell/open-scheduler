class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :company_name, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.integer :zipcode
      t.string :company_contact
      t.text :notes
      t.datetime :meeting_date

      t.timestamps
    end
  end
end
