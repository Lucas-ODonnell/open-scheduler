class AddNotesToLeads < ActiveRecord::Migration[6.1]
  def change
    add_column :leads, :notes, :text
  end
end
