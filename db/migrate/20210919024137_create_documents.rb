class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
