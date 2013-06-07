class CreateRequirements < ActiveRecord::Migration
  def change
    create_table :requirements do |t|
      t.text :description
      t.string :section
      t.string :type
      t.integer :order
      t.string :challenge_id
      t.string :library
      t.boolean :active, :default => true
      t.timestamps
    end
  end
end
