class CreateLeads < ActiveRecord::Migration[6.1]
  def change
    create_table :leads do |t|
      t.string :name, null: false
      t.string :company, null: false
      t.string :position
      t.string :phone
      t.string :email
      t.string :referrer, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
